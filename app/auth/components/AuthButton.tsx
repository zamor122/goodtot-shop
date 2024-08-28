"use client"; // Marking this as a client component

import outputs from '@amplify';
import { Avatar, Button, CircularProgress, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Amplify } from 'aws-amplify';
import { signOut } from "aws-amplify/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

Amplify.configure(outputs, { ssr: true });

export interface User {
  username?: string;
  userId?: string;
  signInDetails?: any; // Replace `any` with a specific type if known
  loading?: boolean;
}

interface IProps {
  user: User | null;
}

export default function AuthButton({ user }: IProps) {
  const router = useRouter();

  const onSignOut = useCallback(async () => {
    try {
      await signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out error: ", error);
    }
  }, [router, user]);

  const UserProfile = useCallback(() => {
    if (user?.loading) {
      return (
        <div className="flex items-center justify-center">
          <CircularProgress aria-label="loading..." size="lg" />
        </div>
      );
    }

    if (user?.userId) {
      return (
        <Dropdown>
          <DropdownTrigger>
            <Avatar />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Menu">
            <DropdownItem key="home">
              <Link href="/">Home</Link>
            </DropdownItem>
            <DropdownItem key="account">
              <Link href="/account">Account</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }

    return (
      <Link href="/auth">
        <Button className="bg-amber-50 dark:bg-stone-700 text-sm font-bold">
          Login
        </Button>
      </Link>
    );
  }, [user, onSignOut]);

  return <UserProfile />;
}
