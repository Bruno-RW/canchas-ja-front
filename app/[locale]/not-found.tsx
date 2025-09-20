"use client";

import { useTranslations } from "next-intl";

import Button from "@/components/ui/custom/Button";

const NotFound = () => {
  const t = useTranslations("NotFound");
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-y-2 py-10 px-12 sm:px-20 lg:py-16 lg:px-28">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-0">404</h1>
        <h2 className="text-xl sm:text-2xl mb-5">{t("Title")}</h2>
        <Button className="w-full rounded-sm" href="/">{t("Button")}</Button>
      </div>
    </div>
  );
};

export default NotFound;
