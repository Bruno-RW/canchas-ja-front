"use client";

import Navbar from "@/components/default/navbar/Navbar";
import Footer from "@/components/default/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col gap-y-2 px-6 py-2 w-full">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
