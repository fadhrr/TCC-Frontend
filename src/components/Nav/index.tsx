"use client";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LayoutGrid,
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import menuData from "./menuData";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useAuth } from "@/context/AuthContext";


export default function Header() {
  const router = useRouter();
  const currentUser = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

// Profile link
  const handleProfileClick = () => {
    router.replace(`/profiles/${currentUser.uid}`);
  };

  // fetching role for dashboard
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admins`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(`error fetching role user: `, error);
      }
    };
  
    fetchData();
  }, []);
  
  
  const handleDashboardClick = () => {
    if (currentUser.uid) {
      const currentUserData = data.find(user => user.id === currentUser.uid);
      console.log("data role: ", currentUserData.role)
      if (currentUserData) {
        if (currentUserData.role === 'Admin') {
          router.replace(`/admin`);
        } else if (currentUserData.role === 'Assistant') {
          router.replace(`/assistant`);
        } else {
          console.log("User is not an Admin and is not an Assistant");
        }
      }
    } else {
      console.log("Current user not found");
    }
  };

  const isAdminOrAssistant = () => {
    if (currentUser.uid) {
      const currentUserData = data.find(user => user.id === currentUser.uid);
      if (currentUserData) {
        if (currentUserData.role === 'Admin') {
          return "Admin";
        } else if (currentUserData.role === 'Assistant') {
          return "Assistant";
        } else {
          return "User";
        }
      }
    }
    return "User";
  }

  return (
    <header
      className={`ud-header left-0 border-b-2 border-black top-0 z-40 flex w-full bg-white items-center ${
        sticky
          ? "shadow-nav fixed z-[9999] border-b border-stroke bg-white/80 backdrop-blur-[5px] transition dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-white"
      } ${pathUrl !== "/" && "bg-[#f5f5f5]"} `}
    >
      <div className="container ">
        <div className="flex flex-wrap items-center justify-between lg:py-0  py-2 mx-4">
          {/* 1 */}
          <div className="logo">
            <a
              href="/"
              className="flex text-black items-center rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TCC
              </span>
            </a>
          </div>

          {/* 2 */}
          <div className="flex items-center space-x-4 ">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2  px-3 py-[6px] lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[20px] transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  } ${pathUrl !== "/" && " dark:!bg-black"} ${
                    pathUrl === "/" && sticky
                      ? "bg-black dark:bg-white"
                      : "bg-black"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[20px] transition-all duration-300 ${
                    navbarOpen ? "opacity-0 " : " "
                  } ${pathUrl !== "/" && " dark:!bg-black"} ${
                    pathUrl === "/" && sticky
                      ? "bg-black dark:bg-white"
                      : "bg-black"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[20px] transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  } ${pathUrl !== "/" && " dark:!bg-black"} ${
                    pathUrl === "/" && sticky
                      ? "bg-black dark:bg-white"
                      : "bg-black"
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-2 border-black border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block justify-center items-center lg:ml-8 xl:ml-32 mx-auto lg:flex lg:gap-x-8  xl:gap-x-12">
                  {menuData.map((menuItem, index) =>
                      <li
                        key={menuItem.id}
                        className="group relative hover:opacity-65 focus:text-blue-300 text-black tracking-tighter"
                      >
                        <Link
                          scroll={false}
                          href={menuItem.path}
                          className={`ud-menu-scroll  flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 text-dark dark:text-white group-hover:text-primary dark:group-hover:text-primary ${
                            (pathUrl === menuItem?.path && !sticky) ||
                            (pathUrl === menuItem?.path && sticky)
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          {/* 3 */}
          {/* dropdown untuk user */}
          <div className="flex items-center  space-x-2 lg:mr-0 mr-3">
            {!currentUser ? (
              <div className="flex gap-4 items-center">
                <Link
                  href={"/auth/signin"}
                  className="relative infline-flex  items-center justify-start inline-block px-4 py-2 bg-[#fae74d] border shadow-[4px_4px_0px_rgba(0,0,0,1)] border-black overflow-hidden font-bold rounded-full group"
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
                  className="text-black transition-colors duration-200 ease-in-out hover:text-slate-500 hidden md:block"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    className="relative infline-flex items-center justify-start inline-block border shadow-[4px_4px_0px_rgba(0,0,0,1)] border-black px-4 py-2 overflow-hidden font-bold rounded-full group bg-[#fae74d]"
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                      {currentUser.displayName}
                    </span>
                    <span className="absolute inset-0  rounded-full"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                  {(isAdminOrAssistant() === "Admin" || isAdminOrAssistant() === "Assistant") && (
                    <div onClick={handleDashboardClick}>
                      <DropdownMenuItem>
                        <LayoutGrid className="mr-2 h-4 w-4"/>
                        <span>Dashboard</span>
                        <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </div>
                  )}
                    <div onClick={handleProfileClick}>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </div>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
