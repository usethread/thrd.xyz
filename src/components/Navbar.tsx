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
import { faBlog, faCircleInfo, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar max-w-7xl flex items-center mx-auto px-4 gap-4 md:px-0">
      <div className="flex items-center gap-2.5">
          <img style={{ borderRadius: "25%"}} className="w-10 h-10 rounded-md" src="/favicon.ico" alt="Logo" />
          <Link href="/">
          <h1 className="text-2xl font-bold">Strafe.chat</h1>
          </Link>
      </div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem className="hover:rounded-[5px]">
            <Link href="https://blog.strafe.chat" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} >
              <FontAwesomeIcon icon={faBlog} size="1x" />
              &nbsp;Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faCircleInfo} size="1x" />
              &nbsp;About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://web.strafe.chat/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faRightToBracket} size="1x" />
                &nbsp;Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"} className="p-2 h-fit">
              <GiHamburgerMenu className="text-lg" />
            </Button>
          </DropdownMenuTrigger>
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
              <Link href={"/login"} className="flex text-md gap-1 items-center">
              <FontAwesomeIcon icon={faRightToBracket} size="1x" />
                <span>Login</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
