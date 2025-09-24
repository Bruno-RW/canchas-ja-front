"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useSession from "@/hooks/useSession";

import { userMock } from "@/lib/mock/user"; //! MOCKUP DATA

import ListingRow from "./listingRow";



export const mockListings = [
  {
    id: 1,
    title: "Cozy Apartment in Downtown",
    location: "New York, NY",
    price: 180,
    image: "/images/listing1.jpg",
    rating: 4.8,
    reviews: 120,
    discount: 10, // 10%
  },
  {
    id: 2,
    title: "Beachside Bungalow",
    location: "Malibu, CA",
    price: 250,
    image: "/images/listing2.jpg",
    rating: 4.9,
    reviews: 95,
    discount: 0,
  },
  {
    id: 3,
    title: "Mountain Cabin Retreat",
    location: "Aspen, CO",
    price: 210,
    image: "/images/listing3.jpg",
    rating: 4.7,
    reviews: 75,
    discount: 15, // 15%
  },
  {
    id: 4,
    title: "Urban Loft",
    location: "Chicago, IL",
    price: 190,
    image: "/images/listing4.jpg",
    rating: 4.6,
    reviews: 60,
    discount: 0,
  },
  {
    id: 5,
    title: "Countryside Villa",
    location: "Napa Valley, CA",
    price: 300,
    image: "/images/listing5.jpg",
    rating: 4.9,
    reviews: 140,
    discount: 20, // 20%
  },
  {
    id: 6,
    title: "Lake House",
    location: "Lake Tahoe, NV",
    price: 220,
    image: "/images/listing6.jpg",
    rating: 4.8,
    reviews: 80,
    discount: 0,
  },
  {
    id: 7,
    title: "Desert Oasis",
    location: "Phoenix, AZ",
    price: 170,
    image: "/images/listing7.jpg",
    rating: 4.5,
    reviews: 50,
    discount: 5, // 5%
  },
  {
    id: 8,
    title: "Forest Hideaway",
    location: "Portland, OR",
    price: 200,
    image: "/images/listing8.jpg",
    rating: 4.7,
    reviews: 65,
    discount: 0,
  },
  {
    id: 9,
    title: "Island Paradise",
    location: "Maui, HI",
    price: 350,
    image: "/images/listing9.jpg",
    rating: 5.0,
    reviews: 110,
    discount: 25, // 25%
  },
  {
    id: 10,
    title: "Modern Penthouse",
    location: "Miami, FL",
    price: 400,
    image: "/images/listing10.jpg",
    rating: 4.9,
    reviews: 90,
    discount: 0,
  },
];








const HomePage = () => {
  const { user, login } = useSession();
  const router = useRouter();

  useEffect(() => {
    // if (!user.isLogin) router.replace("/login");
    if (!user.isLogin) login(userMock);

  }, [user.isLogin]);

  return (
    <>
      <main className="min-h-screen brand-bg-primary">
        <ListingRow listings={mockListings} title="Próximas partidas" />
        <ListingRow listings={mockListings} title="Locais populares" />
        <ListingRow listings={mockListings} title="Recomendado para você" />
      </main>
    </>
  );
};

export default HomePage;
