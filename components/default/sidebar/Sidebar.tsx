"use client";

import { useTranslations } from "next-intl";
import { User, ArrowLeft, Users } from "lucide-react";

import { cn } from "@/lib/utils/utils";

import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeTab?: string
  onTabChange?: (tab: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab = "about", onTabChange }) => {
  const t = useTranslations("UserPage")

  const menuItems = [
    {
      id: "about",
      label: t("AboutMe"),
      icon: User,
    },
    {
      id: "games",
      label: t("PreviousGames"),
      icon: ArrowLeft,
    },
    {
      id: "friends",
      label: t("Friends"),
      icon: Users,
    },
  ]

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 h-12 px-4 text-base font-normal",
                "hover:bg-gray-200 dark:hover:bg-gray-700",
                isActive && "bg-gray-200 dark:bg-gray-700",
              )}
              onClick={() => onTabChange?.(item.id)}
            >
              <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-800 dark:text-gray-200">{item.label}</span>
            </Button>
          )
        })}
      </nav>
    </aside>
  )
};

export default Sidebar;