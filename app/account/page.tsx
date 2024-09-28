"use client"

import {Button} from "@nextui-org/react";
import {getCurrentUser, signOut} from "aws-amplify/auth";
import {useRouter} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {User} from "../auth/components/AuthButton";
import TopNav from "../components/TopNav";
import ListingGrid from "../listing/components/ListingGrid";
import useUserListings from "../hooks/useUserListings";
import UserCard from "./components/UserCard";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const onSignOut = useCallback(async () => {
    try {
      await signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out error: ", error);
    }
  }, [router]);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            setUser(prevState => ({ ...prevState, loading: true }));
            const user = await getCurrentUser();
            setUser(user);
        } catch (e) {
            setUser(null);
        } finally {
            setUser(prevState => ({ ...prevState, loading: false }));
        }
      };

      fetchUser();
  }, []);

  //TODO: Move call to get user's listings here
  const {loading, listings, error} = useUserListings(user?.userId);

  return (
    <>
    <TopNav user={user} />
    <div className="flex flex-col justify-center items-start w-full">
      <div className="container w-1/2">
        <UserCard />
      </div>
      <Button onClick={onSignOut}>Sign out</Button>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Listings</h2>
          {/* TODO: Should take a listings prop and pass to listingGrid */}
            <ListingGrid loading={loading} listings={listings} error={error} />
        </div>
      </section>
    </div>
    </>
  );
}