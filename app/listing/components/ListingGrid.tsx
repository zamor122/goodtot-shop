"use client"
import ListingCard from "./ListingCard";
import {generateClient} from 'aws-amplify/data';
import {type Schema} from '../../../amplify/data/resource';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from "react";
import {User} from "@/app/auth/components/AuthButton";
import {getCurrentUser} from "aws-amplify/auth";

const client = generateClient<Schema>();
type ListingType = Schema["Listing"]["createType"]


//TODO: Take a prop of type ListingType[]
//TODO: Remove setListings as a state, move up a level
export default function ListingGrid() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [listings, setListings] = useState<ListingType[] | null>(null);

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

  //TODO: move logic outside of ListingGrid, move to inside /account and pass to listingGrid
  useEffect(() => {
    async function fetchUserListings() {
      try {
        setIsLoaded(false)
      if(user?.userId) {
        client.models.Listing.list({
          filter: {
            userId: {
              eq: user.userId
            }
          }
        }).then((response) => {
          if(response.errors) {
            setError(response.errors[0].message)
          } else {
            if(response.data) {
              setListings(response.data)
            }
          }
        })
      }
      } catch (error: any) {
        setError(`Error: ${error}`)
      } finally {
        setIsLoaded(true)
      }
    }

    fetchUserListings();
  }, [user]);

  const renderCards = useCallback(() => {
    if (error) return <p>Error: {error}</p>; // Show error state

    if (listings && listings.length > 0) {
      return listings.map((listing) => (
        <ListingCard isLoaded={isLoaded} listing={listing} />
      ));
    } else {
      return <p>No listings found.</p>; // If no listings
    }
  }, [listings, isLoaded, error]); 
  

  return (
    <section className="py-12 md:py-16 lg:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderCards()}
      </div>
    </div>
  </section>
  )
}