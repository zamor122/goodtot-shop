"use client"

import {getCurrentUser, signOut} from "aws-amplify/auth";
import {useCallback, useEffect, useState} from "react";
import {User} from "../auth/components/AuthButton";
import TopNav from "../components/TopNav";
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";

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
  }, [router, user]);

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

  return (
    <>
    <TopNav user={user} />
    <div className="flex justify-center items-center bg-background">
      <span className="text-black dark:text-amber-50">Hi, your account</span>
      <Button onClick={onSignOut}>Sign out</Button>
    </div>
    </>
  );
}