"use client";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const onToggleMenu = (e) => {
    e.target.name = e.target.name === "menu" ? "close" : "menu";
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("top-[9%]");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        console.log("Signed out successfully");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <header className="bg-white border-b-2 border-black">
      <nav className="flex justify-between py-2 items-center w-[92%] mx-auto">
        <div>
          <a href="/">
            <img
              className="w-10 cursor-pointer"
              src={`/images/icon.jpg`}
              alt="..."
            />
          </a>
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                Problem
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Contest
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Rangking
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  className="relative infline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group bg-white"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                    {user.displayName}
                  </span>
                  <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                //  href={route('login')}
                href={"/auth/signin"}
                className="relative infline-flex items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                  Log in
                </span>
                <span className="absolute inset-0 border-2 border-black rounded-full"></span>
              </Link>
              <Link
                href={"/auth/signup"}
                className="text-black transition-colors duration-200 ease-in-out hover:text-slate-500"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
