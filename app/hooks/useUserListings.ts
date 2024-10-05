import {generateClient} from 'aws-amplify/data';
import {useEffect, useState} from "react";
import {type Schema} from '../../amplify/data/resource';

const client = generateClient<Schema>();

type ListingType = Schema["Listing"]["type"];

export interface UseUserListingsResult {
  listings: ListingType[] | null;
  loading: boolean;
  error: string | null;
}

export default function useUserListings(userId: string | undefined): UseUserListingsResult {
  const [listings, setListings] = useState<ListingType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserListings() {
      setLoading(true);

      try {
        if (userId) {
          const response = await client.models.Listing.list({
            filter: {
              userId: {
                eq: userId,
              },
            },
          });

          if (response.errors) {
            setError(response.errors[0].message);
          } else if (response.data) {
            setError(null);
            setListings(response.data);
          }
        } else {
          setError("No user found");
        }
      } catch (err: any) {
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchUserListings();
  }, [userId]);

  return { listings, loading, error };
}
