"use client"

import { Authenticator, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@amplify';
import '@aws-amplify/ui-react/styles.css';
import {useRouter} from 'next/navigation';
import { Hub } from 'aws-amplify/utils';
import {useState} from 'react';
import {CircularProgress} from '@nextui-org/react';
import useRouteStorage from '../hooks/useRouteStorage';
import {formFields} from './form/formFields';
import {components} from './components/components';

Amplify.configure(outputs, {ssr: true});

export default function Page() {
  const router = useRouter()
  const { tokens } = useTheme();
  const { redirectToStoredRoute } = useRouteStorage();

  const [loading, setLoading] = useState(false);
  const theme: Theme = {
    name: 'Auth Example Theme',
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay['10']}`,
            borderWidth: '0',
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: tokens.colors.neutral[20],
            color: tokens.colors.black,
            _hover: {
              backgroundColor: tokens.colors.black,
              color: tokens.colors.white,
            }
          },
          link: {
            color: tokens.colors.white,
            backgroundColor: tokens.colors.black,
            _hover: {
              color: tokens.colors.white,
              backgroundColor: tokens.colors.black
            }
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 2px ${tokens.colors.black}`,
          },
        },
        tabs: {
          item: {
            color: tokens.colors.neutral['80'],
            _active: {
              borderColor: tokens.colors.neutral['100'],
              color: tokens.colors.black,
            },
          },
        },
      },
    },
  }


Hub.listen('auth', ({ payload }) => {
  try{
  setLoading(true)
    switch (payload.event) {
      case 'signedIn':
        redirectToStoredRoute();
        break;
      case 'signedOut':
        router.push("/")
        break;
      case 'tokenRefresh':
        router.push("/account")
        break;
      case 'tokenRefresh_failure':
        router.push("/")
        break;
      case 'signInWithRedirect':
        console.log('signInWithRedirect API has successfully been resolved.');
        break;
      case 'signInWithRedirect_failure':
        router.push("/")
        break;
      case 'customOAuthState':
        router.push("/")
        break;
    }
  } catch (error) {
    throw new Error("Error while redirecting user");
  } finally {
    setLoading(false);
  }
});

if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircularProgress aria-label="loading..." size="lg" />
    </div>
  );
}



  return (
    <div className="h-screen flex justify-center items-center">
    <ThemeProvider theme={theme}>
    <Authenticator loginMechanisms={['email']} formFields={formFields} components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </ThemeProvider>
    </div>
  );
}