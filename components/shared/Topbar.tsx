"use client";

import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  Mail,
} from "lucide-react";
import React, { MouseEvent } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";

function Topbar() {
  const pathname = usePathname();
  const pathShowCase = pathname.replace("/", "");
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const clickHandler = (e: MouseEvent): void => {
    setOpen((open) => !open);
  };

  const handleMessagesClick = () => {
    router.push("/main/message"); // Update this with your actual route
    setOpen(false); // Close the CommandDialog after navigation
  };

  return (
    <nav className="topbar">
      <p className="capitalize text-dark-1 text-body-normal text-center max-xs:hidden">
        {pathShowCase}
      </p>

      <div className="flex">
        <Button
          className="h-full bg-transparent hover:bg-transparent"
          onClick={clickHandler}
        >
          <div className="flex items-center text-small-regular">
            <Command className="pointer-events-none max-w-xs border rounded-lg shadow-sm bg-light-2 flex flex-row">
              <CommandInput
                placeholder="Type a command or search..."
                className="border-none"
              />
              <p className=" flex items-center p-3 text-gray-500 text-subtle-regular">
                <span>⌘</span>J
              </p>
            </Command>
          </div>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>

              <CommandItem>
                <div
                  className="flex flex-row items-center w-full h-full cursor-pointer"
                  onClick={handleMessagesClick}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                </div>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </nav>
  );
}

export default Topbar;
