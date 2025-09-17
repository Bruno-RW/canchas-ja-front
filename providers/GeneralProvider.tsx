"use client";

import { Toaster } from "react-hot-toast";

import SessionContextProvider from "@/context/SessionContext";
import ThemeContextProvider from "@/context/ThemeContext";

const GeneralProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionContextProvider>
      <ThemeContextProvider>
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        {children}
      </ThemeContextProvider>
    </SessionContextProvider>
  );
};

export default GeneralProvider;
