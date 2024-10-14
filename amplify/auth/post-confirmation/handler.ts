import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/post-confirmation";
import { createUser } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",
});

const generateRandomUsername = (): string => {
  const adjectives = [
    "Bright", "Silent", "Swift", "Brave", "Clever", "Mighty", "Bold", "Wise", "Eager", "Quick", "Strong"
  ];
  const nouns = [
    "Falcon", "Lion", "Tiger", "Wolf", "Bear", "Eagle", "Shark", "Panther", "Hawk", "Dragon", "Leopard"
  ];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumbers = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
  return `${randomAdjective}${randomNoun}${randomNumbers}`;
};



export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log("Event Data: ", event)
  const username = generateRandomUsername(); // Use email or auto-generate a username

  await client.graphql({
    query: createUser,
    variables: {
      input: {
        id: event.request.userAttributes.sub,
        email: event.request.userAttributes.email,
        userId: event.request.userAttributes.sub,
        username: username,
        emailVerified: true,
      },
    },
  });

  return event;
};