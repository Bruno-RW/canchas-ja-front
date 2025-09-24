"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, Globe, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GuestMenu: React.FC = () => {
  const t = useTranslations("Navbar");

  return (
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
      <DropdownMenu modal={false}>
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
  );
};

export default GuestMenu;
