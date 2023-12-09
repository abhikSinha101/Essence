"use client";

import {
  CreditCard,
  Settings,
  User,
  Mail,
  Folder,
  Video,
  Banana,
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

import { useRouter } from "next/navigation";
import NotificationCard from "../cards/NotificationCard";

function Searchbar() {
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

  const router = useRouter();

  return (
    <div className="flex">
      <div className="flex p-2 items-center place-content-center ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Banana color="#224444" width={24} height={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <NotificationCard />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Button
        className="h-full bg-transparent hover:bg-transparent"
        onClick={clickHandler}
      >
        <div className="flex items-center text-small-regular">
          <Command className="pointer-events-none max-w-md border rounded-lg shadow-sm bg-light-2 flex flex-row">
            <CommandInput
              placeholder="Type a command or search..."
              className="border-none w-48"
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
              <div
                className="flex flex-row items-center w-full h-full cursor-pointer"
                onClick={() => {
                  router.push("/main/archive");
                  setOpen(false);
                }}
              >
                <Folder className="mr-2 h-4 w-4" />
                <span>Archive</span>
              </div>
            </CommandItem>
            <CommandItem>
              <div
                className="flex flex-row items-center w-full h-full cursor-pointer"
                onClick={() => {
                  router.push("/main/contacts");
                  setOpen(false);
                }}
              >
                <Video className="mr-2 h-4 w-4" />
                <span>Onboardings</span>
              </div>
            </CommandItem>

            <CommandItem>
              <div
                className="flex flex-row items-center w-full h-full cursor-pointer"
                onClick={() => {
                  router.push("/main/message"); // Update this with your actual route
                  setOpen(false);
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Messages</span>
              </div>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <div
                className="flex flex-row items-center w-full h-full cursor-pointer"
                onClick={() => {
                  router.push(`/profile`);
                }}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </div>

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
  );
}

export default Searchbar;
