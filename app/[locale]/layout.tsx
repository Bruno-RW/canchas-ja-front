import type { Metadata } from "next";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import "@/app/globals.css";

import { cn } from "@/lib/utils/utils";
import { baseFont } from "@/lib/fonts/fonts";
import ContextProvider from "@/providers/ContextProvider";

export const metadata: Metadata = {
  title: "Canchas Já",
  description: "Hospede ou aluge suas canchas de bocha.",
};

const RootLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) => {
  const { locale } = await params;
  if ( !hasLocale(routing.locales, locale) ) notFound();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}
        className={cn(
          baseFont.className,
          "flex flex-col w-full bg-gray-50 dark:bg-neutral-900"
        )}
      >
        <NextIntlClientProvider>
          <ContextProvider>
            {children}
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;