"use client";

import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  imageUrl?: string;
  title?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, title }) => {
  return (
    <Card className="aspect-square overflow-hidden bg-gray-200 dark:bg-gray-700 hover:opacity-80 transition-opacity cursor-pointer">
      {imageUrl ? (
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title || "Favorite item"}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-500 text-sm">
            {title || "No image"}
          </span>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
