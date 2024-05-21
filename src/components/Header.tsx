'use client'

import Aloha from "@/icons/aloha-logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed flex inset-0 z-50 h-[96px]">
      <nav className="container flex items-center max-w-7xl mx-auto">
        <Link href="/" className="mr-16">
          <Aloha />
        </Link>
        <div className="flex flex-1 items-center justify-between">
          <ul className="flex gap-8 text-white">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex outline-none items-center gap-2">
                  Barcelona
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#">
                      <span>Item 1</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">
                      <span>Item 2</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex outline-none items-center gap-2">
                  Venues
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#">
                      <span>Venue 1</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">
                      <span>Venue 2</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex outline-none items-center gap-2">
                  About Us
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#">
                      <span>About 1</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#">
                      <span>About 2</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="#">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <div className="font-larken">
            <Button className="text-white bg-transparent hover:bg-transparent">Login</Button>
            <Button className="bg-white text-black hover:bg-background/90">Sign up</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
