"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import axios from "axios";

import { 
  PRODUCT_BEST_RATED_API_URL,
  PRODUCT_NEAR_YOU_API_URL,
  PRODUCT_SPECIAL_DISCOUNT_API_URL
} from "@/lib/routes/backend";

import { Product } from "@/lib/types/product";

import ProductCarousel from "@/components/product/ProcutCarousel";

const HomePage = () => {
  const t = useTranslations("Page.Home.HomePage");

  const [specialDiscounts, setSpecialDiscounts] = useState<Product[]>([]);
  const [bestRated, setBestRated] = useState<Product[]>([]);
  const [nearYou, setNearYou] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resSpecial = await axios.get(PRODUCT_SPECIAL_DISCOUNT_API_URL);
        setSpecialDiscounts(resSpecial.data);

        const resBest = await axios.get(PRODUCT_BEST_RATED_API_URL);
        setBestRated(resBest.data);

        const resNear = await axios.get(PRODUCT_NEAR_YOU_API_URL);
        setNearYou(resNear.data);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ProductCarousel title={t("SpecialDiscounts")} products={specialDiscounts} />
      <ProductCarousel title={t("BestRated")} products={bestRated} />
      { nearYou.length > 0 && <ProductCarousel title={t("NearYou")} products={nearYou} /> }
    </>
  );
};

export default HomePage;
