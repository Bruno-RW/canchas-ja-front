"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Settings,
  UserIcon,
  HelpCircle,
  LogOut,
  CreditCard,
  Search,
  Menu,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import type { User } from "@/lib/types/user";

import NavbarThemeToggle from "@/components/navbar/components/NavbarThemeToggle";
import NavbarLanguageDropdown from "@/components/navbar/components/NavbarLanguageDropdown";
import Logo from "@/components/navbar/components/NavbarLogo";

interface DesktopNavbarProps {
  user: User;
  logout: () => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ user, logout }) => {
  const t = useTranslations("Navbar");

  return (
    <>
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-auto">
        <div className="relative w-full max-w-md">
          <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
            <Input
              type="text"
              placeholder={t("SearchPlaceholder")}
              className="flex-1 border-0 rounded-l-full px-6 py-3 text-sm focus:outline-none focus:ring-0 bg-transparent placeholder:text-gray-500"
            />
            <Button
              size="sm"
              className="rounded-full h-8 w-8 bg-red-500 hover:bg-red-600 text-white border-0 mr-2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 flex-shrink-0">
        {user.isLogin ? (
          <>
            {/* Host link */}
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-gray-100 rounded-full px-3 py-2"
            >
              {t("BecomeHost")}
            </Button>

            {/* Globe icon */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100"
            >
              <Globe className="h-4 w-4" />
            </Button>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow"
                >
                  <Menu className="h-4 w-4" />
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-gray-500 text-white text-xs">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Other pages */}
                <DropdownMenuItem
                  asChild
                  className="flex items-center hover:cursor-pointer"
                >
                  <Link href="/profile">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>{t("Profile")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="flex items-center hover:cursor-pointer"
                >
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>{t("Settings")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="flex items-center hover:cursor-pointer"
                >
                  <Link href="/billing">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>{t("Plans")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="flex items-center hover:cursor-pointer"
                >
                  <Link href="/help">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>{t("HelpFeedback")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                {/* Preferences */}
                <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                  {t("Preferences")}
                </DropdownMenuLabel>

                <div className="px-2 py-1.5 space-y-3">
                  <NavbarThemeToggle />
                  <NavbarLanguageDropdown />
                </div>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem className="text-red-600 focus:text-red-600 hover:cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span onClick={logout}>{t("Logout")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            {/* Host link for non-logged users */}
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-gray-100 rounded-full px-3 py-2"
            >
              {t("BecomeHost")}
            </Button>

            {/* Globe icon */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100"
            >
              <Globe className="h-4 w-4" />
            </Button>

            {/* Login menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow"
                >
                  <Menu className="h-4 w-4" />
                  <div className="h-6 w-6 bg-gray-500 rounded-full flex items-center justify-center">
                    <UserIcon className="h-4 w-4 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48" align="end">
                <DropdownMenuItem asChild>
                  <Link href="/login" className="font-medium">
                    {t("Login")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signin">{t("Signin")}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </>
  );
};

export default DesktopNavbar;
