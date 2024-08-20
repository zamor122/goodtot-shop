import {useRouter} from 'next/navigation';
import { useEffect } from 'react';

const useRouteStorage = () => {
  const router = useRouter();

  const storeCurrentRoute = (route: string) => {
    localStorage.setItem('currentRoute', route);
  };

  const retrieveStoredRoute = () => {
    return localStorage.getItem('currentRoute');
  };

  const redirectToStoredRoute = async () => {
    const storedRoute = await retrieveStoredRoute();
    if (storedRoute) {
      localStorage.removeItem('currentRoute'); // Optional: clear the storage after use
      router.push(storedRoute);
    } else {
      router.push('/account'); // Redirect to a default route if no stored route is found
    }
  };

  return { storeCurrentRoute, redirectToStoredRoute };
};

export default useRouteStorage;
