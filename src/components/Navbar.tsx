"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { GiHamburgerMenu } from "./Icons";
import { DropdownMenuContent, DropdownMenuLabel } from "./ui/dropdown-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faCircleInfo, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <nav className="navbar max-w-7xl flex items-center mx-auto px-4 gap-4 md:px-0">
      <div className="flex items-center gap-2.5">
          <img style={{ borderRadius: "25%"}} className="w-10 h-10 rounded-md" src="/favicon.ico" alt="Logo" />
          <Link href="/">
          <h1 className="text-2xl font-bold">Strafe Chat</h1>
          </Link>
      </div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem className="hover:rounded-[5px]">
            <Link href="https://blog.strafe.chat" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} >
              <FontAwesomeIcon icon={faBlog} size="1x" />
              &nbsp;Strafe Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faCircleInfo} size="1x" />
              &nbsp;About Us
              </NavigationMenuLink>
            </Link>
          <Link href="https://github.com/strafechat" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faGithub} size="1x" />
              &nbsp;Source Code
              </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://panel.strafe.chat/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faUserLock} size="1x" />
                &nbsp;Admin Panel
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden">
        <DropdownMenu>
        <DropdownMenuLabel>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"} className="p-2 h-fit rounded-[5px]">
              <GiHamburgerMenu className="text-lg" />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenuLabel>
          <DropdownMenuContent className="w-fit mr-2 p-2 flex flex-col gap-1">
            <DropdownMenuItem>
              <Link href={"/blog"} className="flex text-md gap-1 items-center">
              <FontAwesomeIcon icon={faBlog} size="1x" />
                <span>Blog</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/about"} className="flex text-md gap-1 items-center">
              <FontAwesomeIcon icon={faCircleInfo} size="1x" />
                <span>About</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"https://github.com/strafechat"} className="flex text-md gap-1 items-center">
              <FontAwesomeIcon icon={faGithub} size="1x" />
                <span>Source Code</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"https://panel.strafe.chat"} className="flex text-md gap-1 items-center">
              <FontAwesomeIcon icon={faUserLock} size="1x" />
                <span>Admin Panel</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
