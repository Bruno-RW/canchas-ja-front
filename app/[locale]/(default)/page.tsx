"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import useSession from "@/hooks/useSession";

import { mockUser } from "@/lib/mock/user"; //! MOCKUP DATA
import { mockProducts } from "@/lib/mock/product"; //! MOCKUP DATA
import ProductCarousel from "@/components/product/ProcutCarousel";

const HomePage = () => {
  const { user, login } = useSession();
  const router = useRouter();
  const t = useTranslations("Page.Home");

  useEffect(() => {
    // if (!user.isLogin) router.replace("/login");
    if (!user.isLogin) login(mockUser);

  }, [user.isLogin]);

  return (
    <>
      <ProductCarousel title={t("SpecialDiscounts")} products={mockProducts} />
      <ProductCarousel title={t("BestRated")} products={mockProducts} />
      <ProductCarousel title={t("NearYou")} products={mockProducts} />
    </>
  );
};

export default HomePage;
