import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import {postConfirmation} from "../auth/post-confirmation/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  User: a.model({
    userId: a.id().required(),
    name: a.string(),
    email: a.email().required(),
    username: a.string(),
    zipCode: a.integer(),
    latitude: a.float(),
    longitude: a.float(),
    meetupRadius: a.float(),
    phone: a.phone(),
    picture: a.url(),
    rating: a.float(),
    status: a.enum(["Active", "Flagged", "Suspended", "Banned"]),
    lastLogin: a.datetime(),
    emailVerified: a.boolean().default(false),
    phoneVerified: a.boolean().default(false),
    plan: a.enum(["Free"]),
    smsNotifications: a.boolean().default(false),
    emailNotifications: a.boolean().default(false),
    notificationPreference: a.enum(["Phone", "Email"]),
    languagePreference: a.enum(["English"]),
    listings: a.hasMany("Listing", "userId"),
    buyer: a.hasMany("Transaction", "buyerId"),
    seller: a.hasMany("Transaction", "sellerId"),
    conversationsAsSeller: a.hasMany("Conversation", "sellerId"),
    conversationsAsEnquirer: a.hasMany("Conversation", "enquirerId"),
    messagesSent: a.hasMany("Message", "senderId"),
    messagesReceived: a.hasMany("Message", "recipientId")
  }).authorization((allow) => [allow.guest(),allow.authenticated("identityPool")]),

  Category: a.model({
    categoryId: a.id().required(),
    name: a.string().required(),
    subcategories: a.hasMany("Subcategory", "categoryId")
  }).authorization((allow) => [allow.guest(), allow.authenticated("identityPool")]),

  Subcategory: a.model({
    name: a.string().required(), 
    categoryId: a.id().required(),
    category: a.belongsTo("Category", "categoryId") 
  }).authorization((allow) => [allow.guest(), allow.authenticated("identityPool")]),

  Listing: a.model({
    title: a.string().required(),
    description: a.string(),
    category: a.string().required(),
    price: a.float().required(),
    zipCode: a.integer().required(),
    locationDisplayName: a.string(),
    latitude: a.float(),
    longitude: a.float(),
    meetupRadius: a.float(),
    deliveryRadius: a.float(),
    status: a.enum(["Active", "Sold", "Expired"]),
    rating: a.float().default(0.0),
    images: a.string().array(),
    isFeatured: a.boolean().required().default(false),
    userId: a.id().required(),
    user: a.belongsTo("User", "userId"),
    transaction: a.hasOne("Transaction", "listingId"),
    conversations: a.hasMany("Conversation", "listingId")
  }).authorization((allow) => [allow.guest(), allow.authenticated("identityPool")]),

  Transaction: a.model({
    listingId: a.id().required(),
    buyerId: a.id().required(),
    sellerId: a.id().required(),
    status: a.enum(["Pending", "Completed", "Cancelled"]),
    amount: a.float().required(),
    paymentMethod: a.enum(["Cash", "Card", "Other"]),
    completedAt: a.datetime().required(),
    comments: a.string(),
    listing: a.belongsTo("Listing", "listingId"),
    buyer: a.belongsTo("User", "buyerId"),
    seller: a.belongsTo("User", "sellerId")
  }).secondaryIndexes((index) => [index("buyerId"), index("sellerId"), index("listingId")])
  .authorization((allow) => [allow.authenticated("identityPool")]),

  Conversation: a.model({
    listingId: a.id().required(),
    enquirerId: a.id().required(),
    sellerId: a.id().required(),
    lastMessageAt: a.datetime(),
    messages: a.hasMany("Message", "conversationId"),
    listing: a.belongsTo("Listing", "listingId"),
    seller: a.belongsTo("User", "sellerId"),
    enquirer: a.belongsTo("User", "enquirerId")
  }).secondaryIndexes((index) => [index("listingId")])
  .authorization((allow) => [allow.authenticated("identityPool")]),

  Message: a.model({
    conversationId: a.id().required(),
    senderId: a.id().required(),
    recipientId: a.id().required(),
    content: a.string().required(),
    sentAt: a.datetime().required(),
    isRead: a.boolean().default(false),
    conversation: a.belongsTo("Conversation", "conversationId"),
    sender: a.belongsTo("User", "senderId"),
    recipient: a.belongsTo("User", "recipientId")
  }).secondaryIndexes((index) => [index("conversationId")])
  .authorization((allow) => [allow.authenticated("identityPool")])
}).authorization((allow) => [allow.resource(postConfirmation)]);


export type Schema = ClientSchema<typeof schema>;

//check userPool or iam depending on what the permissions should be
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
