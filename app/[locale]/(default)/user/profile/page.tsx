"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import useSession from "@/hooks/useSession";
import { userMock } from "@/lib/mock/user";

import Sidebar from "@/components/default/sidebar/Sidebar";
import ProductCard from "@/components/cards/ProductCard";

const ProfilePage = () => {
  // const { user } = useSession();
  const user = userMock; //! MOCKUP DATA

  const t = useTranslations("ProfilePage");
  const [activeTab, setActiveTab] = useState("about");

  const favorites = Array.from({ length: 6 }, (_, i) => ({
    id: `favorite-${i + 1}`,
  }));

  const countFavorites = favorites.length;

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full h-full overflow-auto scrollbar pb-8">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col gap-8">
        {/* About Me */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("AboutMe")}
            </h2>
            <Button variant="outline" size="sm">
              {t("Edit")}
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <Avatar className="h-48 w-48 flex-shrink-0 bg-gray-300 dark:bg-gray-600">
              <AvatarImage src="/placeholder.svg" alt="User avatar" />
              <AvatarFallback className="text-6xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-32 w-32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </AvatarFallback>
            </Avatar>

            {/* User Info */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {user.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
        </section>

        {/* Favorites */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {t("Favorites")} ({countFavorites})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((favorite) => (
              <ProductCard key={favorite.id} id={favorite.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
