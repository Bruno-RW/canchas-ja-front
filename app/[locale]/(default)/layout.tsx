"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex flex-col gap-y-2 px-6 py-2 w-full flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
