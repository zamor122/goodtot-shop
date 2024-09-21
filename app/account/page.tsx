"use client"

import {Button} from "@nextui-org/react";
import {getCurrentUser, signOut} from "aws-amplify/auth";
import {useRouter} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {User} from "../auth/components/AuthButton";
import TopNav from "../components/TopNav";
import ListingGrid from "../listing/components/ListingGrid";

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

  return (
    <>
    <TopNav user={user} />
    <div className="flex flex-col justify-center items-center bg-background">
      <span className="text-black dark:text-amber-50">Hi, your account</span>
      <Button onClick={onSignOut}>Sign out</Button>
      {/* TODO: Should take a listings prop and pass to listingGrid */}
      <ListingGrid />
    </div>
    </>
  );
}