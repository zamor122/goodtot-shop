import {Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Image, Input} from "@nextui-org/react";
import Link from "next/link";
import {SearchIcon} from "./SearchIcon";
import {ThemeSwitcher} from "./Theme/ThemeSwitcher";

export default function TopNav() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-emerald-400 border-b md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image src="../goodtot.svg" width={150} height={80} />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="relative flex-1 max-w-md">
        <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-lg" />
      </div>
      <div className="flex">
        <ThemeSwitcher />
        <Avatar />
      </div>
    </header>
  );
}
