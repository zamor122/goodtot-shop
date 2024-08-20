import {Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Image, Input, Navbar} from "@nextui-org/react";
import Link from "next/link";
import {SearchIcon} from "./SearchIcon";
import {ThemeSwitcher} from "./Theme/ThemeSwitcher";

export default function TopNav() {
  return (
    <Navbar position="sticky" maxWidth="full" className="flex items-center justify-between h-16 bg-emerald-400 border-b md:px-6">
      <Link href="#" className="hidden sm:flex items-center gap-2" prefetch={false}>
        <Image src="../goodtot.svg" width={150} height={80} />
        <span className="sr-only">Goodtot Shop</span>
      </Link>
      <Link href="#" className="flex sm:hidden" prefetch={false}>
        <Image src="../gt.svg" width={30} height={80} />
        <span className="sr-only">Goodtot Shop</span>
      </Link>
      <div className="relative flex-1 max-w-md">
        <Input type="search" placeholder="Search..." className="w-full rounded-lg" />
      </div>
      <div className="flex">
        <ThemeSwitcher />
        <Avatar />
      </div>
    </Navbar>
  );
}
