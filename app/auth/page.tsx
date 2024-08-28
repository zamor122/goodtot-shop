"use client"

import {Authenticator, Theme, ThemeProvider, useTheme} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {CircularProgress} from '@nextui-org/react';
import {getCurrentUser} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import TopNav from '../components/TopNav';
import useRouteStorage from '../hooks/useRouteStorage';
import {User} from './components/AuthButton';
import {components} from './components/components';
import {formFields} from './form/formFields';

export default function Page() {
  const router = useRouter()
  const { tokens } = useTheme();
  const { redirectToStoredRoute } = useRouteStorage();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
        try {
            setUser(prevState => ({ ...prevState, loading: true }));
            const user = await getCurrentUser();
            console.log("User from context: ", user);
            setUser(user);
        } catch (e) {
            setUser(null);
        } finally {
            setUser(prevState => ({ ...prevState, loading: false }));
        }
      };

      fetchUser();
  }, []);
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
        router.replace("/")
        break;
      case 'tokenRefresh':
        router.replace("/account")
        router.refresh();
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
    router.refresh();
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
2


  return (
    <>
    <TopNav user={user} showAuthButton={false} />
    <div className="h-screen flex justify-center items-center">
    <ThemeProvider theme={theme}>
    <Authenticator loginMechanisms={['email']} formFields={formFields} components={components}>
      {({ signOut, user }) => (
        <>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
    </ThemeProvider>
    </div>
    </>
  );
}