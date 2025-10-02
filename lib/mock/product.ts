import { Product } from "@/lib/types/product";

export const mockProducts: Product[] = [
  {
    id: "1",
    images: [
      "/soccer-field-aerial.png",
      "/soccer-field-goal.jpg",
      "/soccer-field-night.jpg",
      "/soccer-field-grass.jpg",
      "/soccer-field-stadium.jpg",
    ],
    location: "Horizontina, RS",
    address: "Rua Piratini, 222",
    dateRange: "Out 22 - 24",
    price: 60,
    rating: 4.91,
    currency: "R$",
  },
  {
    id: "2",
    images: [
      "/indoor-soccer-court.jpg",
      "/futsal-court.jpg",
      "/sports-court-lighting.jpg",
      "/soccer-court-bleachers.jpg",
      "/soccer-court-entrance.jpg",
    ],
    location: "Horizontina, RS",
    address: "Rua Piratini, 222",
    dateRange: "Out 22 - 24",
    price: 60,
    rating: 4.91,
    discount: 50, // 50% off
    currency: "R$",
  },
  {
    id: "3",
    images: ["/beach-soccer-field.jpg", "/sand-soccer-court.jpg", "/beach-volleyball-court.png"],
    location: "Porto Alegre, RS",
    address: "Av. Beira Mar, 1500",
    dateRange: "Out 25 - 27",
    price: 80,
    rating: 4.85,
    discount: 25, // 25% off
    currency: "R$",
  },
  {
    id: "4",
    images: ["/modern-soccer-facility.jpg", "/professional-soccer-field.jpg"],
    location: "Santa Rosa, RS",
    address: "Rua dos Esportes, 450",
    dateRange: "Out 28 - 30",
    price: 100,
    rating: 4.95,
    currency: "R$",
  },
]
