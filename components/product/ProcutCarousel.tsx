"use client";

import type { Product } from "@/lib/types/product";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "@/components/product/ProductCard";

interface ProductCarouselProps {
  title?: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
}) => {
  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-2xl mb-6 font-semibold text-foreground">{title}</h2>
      )}

      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 basis-[280px] md:basis-[320px]"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious 
          className="absolute -top-16 right-4 h-10 w-10 rounded-full border border-border bg-background hover:bg-accent disabled:opacity-50"
        />

        <CarouselNext 
          className="absolute -top-16 right-0 h-10 w-10 rounded-full border border-border bg-background hover:bg-accent disabled:opacity-50"
        />
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
