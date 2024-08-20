import {Heading, Text, View, useAuthenticator, useTheme} from "@aws-amplify/ui-react";
import {Button, Image} from "@nextui-org/react";

export const components = {
  Header() {
    const { tokens } = useTheme();

    return null;
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={5}
        >
          <p>Sign in</p>
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            onClick={toForgotPassword}
            variant="bordered"
            className="text-black"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={5}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            onClick={toSignIn}
            variant="bordered"
            className="text-black"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return null;
    },
    Footer() {
      return null;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return null;
    },
    Footer() {
      return null;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return null;
    },
    Footer() {
      return null;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 0`}
          level={5}
        >Forgot password
        </Heading>
      );
    },
    Footer() {
      return null;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={5}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return null;
    },
  },
};