"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col gap-y-2 px-6 py-2 w-full h-full overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
