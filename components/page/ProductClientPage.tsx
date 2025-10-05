"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import axios from "axios";
import { Star, StarHalf, Share2, Heart, Clock } from "lucide-react";

import { PRODUCT_API_URL } from "@/lib/routes/backend";
import { Product } from "@/lib/types/product";
import { cn } from "@/lib/utils/utils";

import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/custom/Separator";

interface ProductClientPageProps {
  productId: number;
}

const ProductClientPage: React.FC<ProductClientPageProps> = ({ productId }) => {
  const t = useTranslations("Page.Product.ProductClientPage");
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProducts = async () => {
      if (!productId) return;

      try {
        const response = await axios.get(`${PRODUCT_API_URL}/${productId}`);
        if (!response.data) notFound();

        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [productId]);

  const discountedPrice = product?.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product?.price;
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{product?.address}</h1>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
            {t("Share")}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="w-4 h-4" />
            {t("Save")}
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        {/* Main Image */}
        <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-lg">
          <div className="w-full h-full bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 gap-2">
          {product?.images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <div className="w-full h-full bg-gray-300 dark:bg-gray-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-y-6">
          {/* Location and details */}
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-semibold">{product?.location}</h2>
            <p className="text-muted-foreground">{product?.details}</p>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col gap-y-6 border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
              <p className="text-xl font-semibold">{t("MostWanted")}</p>

              <div className="space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl font-bold">
                    {product?.rating.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-0.5">
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    if (!product?.rating) return;

                    if (product?.rating >= starValue) {
                      return (
                        <Star
                          key={index}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      );
                    }

                    if (
                      product?.rating >= index + 0.5 &&
                      product?.rating < starValue
                    ) {
                      return (
                        <StarHalf
                          key={index}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      );
                    }

                    return (
                      <Star key={index} className="w-4 h-4 text-yellow-400" />
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-bold">{product?.reviews}</p>
                <p className="text-sm text-muted-foreground">{t("Reviews")}</p>
              </div>
            </div>

            <Separator className="w-11/12 self-center align-middle items-center text-center snap-center center" />

            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
              <p>{product?.description}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className={cn("lg:col-span-1 flex flex-col border rounded-lg p-6 h-full", product?.discountPercentage ? "justify-between gap-y-4" : "justify-center gap-y-8" )}>
          <div className="flex flex-col gap-y-6">
            {/* Discount Badge */}
            {product?.discountPercentage && (
              <div className="bg-pink-100 dark:bg-pink-900/30 text-center py-2 rounded-md">
                <span className="font-semibold">{t("SpecialDiscount")}</span>
              </div>
            )}

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span 
                  className={cn("font-bold", product?.discountPercentage ? "text-2xl" : "text-4xl")}>
                  {product?.currency}
                  {discountedPrice?.toFixed(2)}
                </span>

                {product?.discountDuration &&
                  product.discountPercentage &&
                  product.discountPercentage > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {t("DiscountDuration", { x: product.discountDuration })}
                    </span>
                  )}
              </div>

              {product?.discountPercentage && (
                <p className="text-sm text-muted-foreground line-through">
                  {product?.currency}
                  {product?.price}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            {/* Time Selection */}
            <div className="flex justify-center gap-x-4 pt-4">
              <div className="flex flex-col items-center gap-y-1 w-full">
                <p className="text-lg font-semibold">{t("CheckIn")}</p>
                <p className="text-lg font-medium">13:30</p>
              </div>

              <div className="w-1/4">
                <Clock className="w-full h-full" />
              </div>

              <div className="flex flex-col items-center gap-y-1 w-full">
                <p className="text-lg font-semibold">{t("CheckOut")}</p>
                <p className="text-lg font-medium">17:30</p>
              </div>
            </div>

            {/* Book Button */}
            <Button className="w-full" size="lg">
              {t("BookNow")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductClientPage;
