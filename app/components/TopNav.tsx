"use client"

import {Image, Input, Navbar} from "@nextui-org/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useCallback} from "react";
import AuthButton, {User} from "../auth/components/AuthButton";
import {ThemeSwitcher} from "./Theme/ThemeSwitcher";

interface IProps {
  user: User | null;
  showAuthButton?: boolean;
}

export default function TopNav({user, showAuthButton=true}: IProps) {
  const router = useRouter();

  const UserProfile = useCallback(() => {
    if(showAuthButton) {
      return <AuthButton user={user} />
    }
    return null;
  }, [user, router]);

  return (
    <Navbar position="sticky" maxWidth="full" className="flex items-center justify-between h-16 bg-emerald-400 border-b md:px-6">
      <Link href="/" className="hidden sm:flex items-center gap-2" prefetch={true}>
        <Image src="../goodtot.svg" width={150} height={80} />
        <span className="sr-only">Goodtot Shop</span>
      </Link>
      <Link href="/" className="flex sm:hidden" prefetch={true}>
        <Image src="../gt.svg" width={30} height={80} />
        <span className="sr-only">Goodtot Shop</span>
      </Link>
      <div className="relative flex-1 max-w-md">
        <Input type="search" placeholder="Search..." className="w-full rounded-lg" />
      </div>
      <div className="flex">
        <ThemeSwitcher />
        <UserProfile />
      </div>
    </Navbar>
  );
}
