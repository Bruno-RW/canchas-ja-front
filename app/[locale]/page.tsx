"use client";

import React from "react";
import Image from "next/image";
import Icon from "@/public/icone.svg";
import DefaultAvatar from "@/public/default-avatar.svg";
import { useState } from "react";

<<<<<<< HEAD
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

import { cn } from "@/lib/utils";
import { baseFont } from "@/lib/fonts";
import GeneralProvider from "@/providers/ContextProvider";

export const metadata: Metadata = {
  title: "Canchas Já",
  description: "Chat bot para hospitais utilizando dados personalizados",
=======
const COLORS = {
  primary: "#0B5381",
  primaryHover: "#0E649E",
  border: "gray-300",
  borderLight: "gray-200",
  bg: "gray-50",
  bgWhite: "#FFFFFF",
  bgInput: "#F9FAFB",
  text: "#222222",
  textLight: "gray-600",
  textMuted: "gray-500",
  textAccount: "gray-900",
  shadow: "shadow",
  shadowInner: "shadow-inner",
  yellow: "yellow-500",
>>>>>>> 9652e93eec88755be537f49859615bb25af9aee4
};

const MAX_ROW_REPEATS = 5; // N times to repeat rows
const RATING_BEST = 4.0;

// State for row pagination
export default function Home() {
  const [search, setSearch] = useState("");
  const [rowStartIdx, setRowStartIdx] = useState([0, 0, 0]);
  const [repeatCount, setRepeatCount] = useState(1);

  const initialItems = [
    {
      id: 1,
      title: "Cozy Apartment in Downtown",
      city: "New York",
      state: "NY",
      addressName: "Broadway",
      addressNumber: "123",
      price: 180,
      sale: "10",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Beachside Bungalow",
      city: "Malibu",
      state: "CA",
      addressName: "Pacific Coast Hwy",
      addressNumber: "456",
      price: 250,
      sale: "0",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Mountain Cabin Retreat",
      city: "Aspen",
      state: "CO",
      addressName: "Main St",
      addressNumber: "789",
      price: 210,
      sale: "15",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Urban Loft",
      city: "Chicago",
      state: "IL",
      addressName: "Michigan Ave",
      addressNumber: "101",
      price: 190,
      sale: "0",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Countryside Villa",
      city: "Napa Valley",
      state: "CA",
      addressName: "Vineyard Rd",
      addressNumber: "202",
      price: 300,
      sale: "20",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
    },
    {
      id: 6,
      title: "Lake House",
      city: "Lake Tahoe",
      state: "NV",
      addressName: "Lakeview Dr",
      addressNumber: "303",
      price: 220,
      sale: "0",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
    },
    {
      id: 7,
      title: "Desert Oasis",
      city: "Phoenix",
      state: "AZ",
      addressName: "Camelback Rd",
      addressNumber: "404",
      price: 170,
      sale: "5",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
    },
    {
      id: 8,
      title: "Forest Hideaway",
      city: "Portland",
      state: "OR",
      addressName: "Pine St",
      addressNumber: "505",
      price: 200,
      sale: "0",
      image:
        "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
    },
    {
      id: 9,
      title: "Island Paradise",
      city: "Maui",
      state: "HI",
      addressName: "Beach Rd",
      addressNumber: "606",
      price: 350,
      sale: "25",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
    },
  ];
  const [results, setResults] = useState(initialItems);
  type User = {
    avatar: string;
    // add other properties as needed
  } | null;

  const [user, setUser] = useState<User>(null); // null if not logged in
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredResults = results.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.city.toLowerCase().includes(search.toLowerCase()) ||
      r.state.toLowerCase().includes(search.toLowerCase()) ||
      r.addressName.toLowerCase().includes(search.toLowerCase()) ||
      r.addressNumber.toLowerCase().includes(search.toLowerCase())
  );

  // Define three main rows with their own filtered items
  const descontosEspeciais = results.filter(item => parseInt(item.sale) > 0);
  const melhorAvaliadas = results.filter(item => item.rating >= RATING_BEST);
  const proximasDeVoce = results;

  const rowTitles = [
    "Descontos Especiais",
    "Canchas melhor avaliadas",
    "Proximas de voce"
  ];
  const rowData = [descontosEspeciais, melhorAvaliadas, proximasDeVoce];


  // Helper to get up to 6 items for the current row
  function getRowItems(rowArr: any[], idx: number) {
    return rowArr.slice(rowStartIdx[idx], rowStartIdx[idx] + 6);
  }

  function handleArrow(rowIdx: number, direction: "left" | "right") {
    setRowStartIdx(prev => {
      const maxIdx = Math.max(0, rowData[rowIdx].length - 6);
      const newIdx = direction === "left"
        ? Math.max(0, prev[rowIdx] - 6)
        : Math.min(maxIdx, prev[rowIdx] + 6);
      const updated = [...prev];
      updated[rowIdx] = newIdx;
      return updated;
    });
  }

  React.useEffect(() => {
    let debounceTimeout: NodeJS.Timeout | null = null;
    function onScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        repeatCount < MAX_ROW_REPEATS
      ) {
        if (!debounceTimeout) {
          debounceTimeout = setTimeout(() => {
            setRepeatCount((prev) => prev + 1);
            debounceTimeout = null;
          }, 200); // 200ms debounce for smoother loading
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [repeatCount]);

  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow bg-white">
        <div className="flex items-center gap-2">
          <Image src={Icon} alt="Logo" width={40} height={40} />
          <span style={{ color: COLORS.primary }} className="text-2xl font-bold">Canchas Já</span>
        </div>
        <div className="flex-1 flex justify-center mx-8">
          <input
            type="text"
            placeholder="Search destinations, stays..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ background: COLORS.bgInput, borderColor: COLORS.border, color: COLORS.text }}
            className="w-full max-w-xl px-6 py-3 rounded-full border focus:outline-none focus:ring-2 text-lg"
          />
        </div>
        <div className="flex items-center gap-4 relative">
          <button style={{ background: COLORS.primary }} className="rounded-full px-4 py-2 text-white font-semibold hover:opacity-80">
            Sign up
          </button>
          <div>
            <button
              style={{ background: COLORS.bgInput, borderColor: COLORS.border }}
              className="rounded-full border w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <Image
                src={user?.avatar || DefaultAvatar}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow z-10">
                {!user ? (
                  <div className="flex flex-col">
                    <button className="px-4 py-2 hover:bg-gray-100 text-left">
                      Log in
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100 text-left">
                      Sign up
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="px-4 py-2">Account</span>
                    <button className="px-4 py-2 hover:bg-gray-100 text-left">
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Listings */}
      <main className="flex-1 px-8 py-12">
        <h2 style={{ color: COLORS.text }} className="text-3xl font-bold mb-8">
          {filteredResults.length ? "Canchas disponíveis" : "No results found"}
        </h2>
        {/* Infinite scrolling rows */}
        {Array.from({ length: repeatCount }).map((_, repeatIdx) => (
          [0, 1, 2].map((rowIdx) => (
            <div key={`row-${repeatIdx}-${rowIdx}`} className="mb-12">
              <div style={{ color: COLORS.primary }} className="text-2xl font-semibold mb-4 flex items-center justify-between">
                <span>{rowTitles[rowIdx]}</span>
                {rowData[rowIdx].length > 6 && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleArrow(rowIdx, "left")}
                      disabled={rowStartIdx[rowIdx] === 0}
                      className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                      &#8592;
                    </button>
                    <button
                      onClick={() => handleArrow(rowIdx, "right")}
                      disabled={rowStartIdx[rowIdx] + 6 >= rowData[rowIdx].length}
                      className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    >
                      &#8594;
                    </button>
                  </div>
                )}
              </div>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {getRowItems(rowData[rowIdx], rowIdx).map((stay) => (
                  <div
                    key={stay.id + '-' + repeatIdx}
                    className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden w-full h-[400px] flex flex-col"
                  >
                    <img
                      src={stay.image}
                      alt={stay.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-gray-700 font-semibold mb-1">
                          {stay.city}, {stay.state}
                        </div>
                        <div className="text-gray-500 mb-1">
                          {stay.addressName}, {stay.addressNumber}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          {rowIdx === 0 && parseInt(stay.sale) > 0 ? (
                            <>
                              <span className="line-through text-gray-400">${stay.price}</span>
                              <span className="text-pink-600 font-bold">
                                ${Math.round(stay.price * (1 - parseInt(stay.sale) / 100))}
                              </span>
                              <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs font-bold">
                                -{stay.sale}%
                              </span>
                            </>
                          ) : (
                            <span className="text-pink-600 font-bold">${stay.price}</span>
                          )}
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 text-${COLORS.yellow}`}> 
                        <svg
                          width="18"
                          height="18"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                        <span className="font-medium">{stay.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Fill empty slots if less than 6 items */}
                {Array.from({ length: 6 - getRowItems(rowData[rowIdx], rowIdx).length }).map((_, idx) => (
                  <div key={`empty-${repeatIdx}-${rowIdx}-${idx}`} className="bg-transparent" />
                ))}
              </div>
            </div>
          ))
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 mt-auto shadow-inner">
        <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
          <a href="#" className="hover:underline">
            © 2024 Airbnb copy
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
      </footer>
    </div>
  );
}