"use client";

import { useState } from "react";

import useSession from "@/hooks/useSession";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import { userMock } from "@/lib/mock/user"; //! MOCKUP DATA

const Navbar = () => {
  const { user, logout } = useSession();
  // const { logout } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky flex top-0 z-50 w-full h-16 items-center justify-between px-6 md:px-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <DesktopNavbar 
        user={userMock} 
        logout={logout}
      />

      <MobileNavbar
        user={userMock}
        logout={logout}

        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

export default Navbar;
