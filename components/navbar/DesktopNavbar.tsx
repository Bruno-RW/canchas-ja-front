"use client"

import Link from "next/link";
import { useTranslations } from "next-intl";
import { 
  Settings, 
  User as UserIcon, 
  HelpCircle, 
  LogOut, 
  CreditCard, 
  ChevronDown, 
  Stethoscope, 
  Scale, 
  Activity, 
  Heart 
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

import { User } from "@/lib/types/user";

import NavbarThemeToggle from "@/components/navbar/components/NavbarThemeToggle";
import NavbarLanguageDropdown from "@/components/navbar/components/NavbarLanguageDropdown";
import Logo from "@/components/navbar/components/NavbarLogo";

interface DesktopNavbarProps {
  user: User;
  logout: () => void;
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ user, logout }) => {
  const t = useTranslations("Navbar");
  
  return (
    <>
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      {user.isLogin && (
        <>
          {/* Appointment pages */}
          <div className="hidden md:flex items-center gap-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  {t("Appointments")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/appointment/obesity" className="flex items-center">
                    <Scale className="mr-2 h-4 w-4" />
                    <span>{t("Obesity")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/appointment/diabetes" className="flex items-center">
                    <Activity className="mr-2 h-4 w-4" />
                    <span>{t("Diabetes")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/appointment/cardiology" className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    <span>{t("Cardiology")}</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* User info */}
          <div className="hidden md:flex items-center gap-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Other pages */}
                <DropdownMenuItem asChild className="flex items-center hover:cursor-pointer">
                  <Link href="/profile">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>{t("Profile")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="flex items-center hover:cursor-pointer"> 
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>{t("Settings")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="flex items-center hover:cursor-pointer">
                  <Link href="/billing">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>{t("Plans")}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="flex items-center hover:cursor-pointer">
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
          </div>
        </>
      )}

      {!user.isLogin && (
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild className="text-base">
            <Link href="/login">{t("Login")}</Link>
          </Button>
          <Button asChild size="lg" className="rounded-lg px-6">
            <Link href="/signin">{t("Signin")}</Link>
          </Button>
        </div>
      )}
    </>
  )
}

export default DesktopNavbar;
