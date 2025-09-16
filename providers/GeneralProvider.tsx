"use client";

import { Toaster } from "react-hot-toast";

import ThemeContextProvider from "@/context/ThemeContext";

const GeneralProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      {children}
    </ThemeContextProvider>
  );
};

export default GeneralProvider;
