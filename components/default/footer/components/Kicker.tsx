"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Dot } from "lucide-react";

import LanguageSVG from "@/public/icons/action/language.svg";
import MoneySVG from "@/public/icons/editor/attach_money.svg";

const Kicker = () => {
  const t = useTranslations("Footer.Kicker");

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0 text-brand-text-secondary">
      {/* Left side - Copyright and links */}
      <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm">
        <span>{t("Copyright")}</span>
        <Dot className="w-3" />

        <a href="#" className="hover:text-brand-primary hover:underline">
          {t("Privacy")}
        </a>
        <Dot className="w-3" />

        <a href="#" className="hover:text-brand-primary hover:underline">
          {t("Terms")}
        </a>
        <Dot className="w-3" />

        <a href="#" className="hover:text-brand-primary hover:underline">
          {t("Contact")}
        </a>
      </div>

      {/* Right side - Language, currency and social */}
      <div className="flex items-center gap-x-16">
        <div className="flex items-center gap-x-2 text-sm">
          <Link href="#" className="flex items-center gap-x-1 hover:text-brand-primary">
            <Image src={LanguageSVG} alt="Language icon" width={22} />
            <span className="font-medium underline underline-offset-[3px]">{t("Language")}</span>
          </Link>

          <Link href="#" className="flex items-center hover:text-brand-primary">
            <Image src={MoneySVG} alt="Language icon" width={22} />
            <span className="font-medium underline underline-offset-[3px]">{t("Currency")}</span>
          </Link>
        </div>

        <div className="flex items-center gap-x-4">
          <Link href="#" className="hover:text-brand-primary" children={<FaFacebook size={22} />} />
          <Link href="#" className="hover:text-brand-primary" children={<FaXTwitter size={22} />} />
          <Link href="#" className="hover:text-brand-primary" children={<FaInstagram size={22} />} />
        </div>
      </div>
    </div>
  );
};

export default Kicker;
