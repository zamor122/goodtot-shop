import {generateClient} from 'aws-amplify/data';
import {useEffect, useState} from "react";
import {type Schema} from '../../amplify/data/resource';

const client = generateClient<Schema>();

type ListingType = Schema["Listing"]["createType"]

export interface UseUserListingsResult {
  listings: ListingType[] | null;
  loading: boolean;
  error: string | null;
}

export default function useListings(): UseUserListingsResult {
  const [listings, setListings] = useState<ListingType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserListings() {
      setLoading(true);

      try {
          const response = await client.models.Listing.list({
            limit: 100,
          });

          if (response.errors) {
            setError(response.errors[0].message);
          } else if (response.data) {
            setListings(response.data);
          }
      } catch (err: any) {
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchUserListings();
  }, []);

  return { listings, loading, error };
}
