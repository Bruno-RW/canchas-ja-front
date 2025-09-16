"use client";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex flex-col gap-y-2 px-6 py-2 w-full h-full">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
