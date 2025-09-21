import Link from "next/link";
import Image from "next/image";

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Dot } from "lucide-react";

import LanguageSVG from "@/public/icons/action/language.svg";
import MoneySVG from "@/public/icons/editor/attach_money.svg";

const Kicker = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 md:gap-y-0">
      {/* Left side - Copyright and links */}
      <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm text-gray-600">
        <span>© 2025 Canchas Já.</span>
        <Dot className="w-3" />

        <a href="#" className="hover:text-gray-900">
          Privacidade
        </a>
        <Dot className="w-3" />

        <a href="#" className="hover:text-gray-900">
          Termos
        </a>
        <Dot className="w-3" />

        <a href="#" className="hover:text-gray-900">
          Contato
        </a>
      </div>

      {/* Right side - Language, currency and social */}
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2 text-sm">
          <button className="flex items-center gap-x-1 text-gray-600 hover:text-gray-900">
            {/* <LanguageSVG className="w-8" /> */}
            {/* <SVG name="icons/action/language" /> */} {/* https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline */}
            <Image src={LanguageSVG} alt="Language icon" width={22} />
            <span className="font-medium underline">Português (BR)</span>
          </button>

          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Image src={MoneySVG} alt="Language icon" width={22} />
            <span className="font-medium underline">BRL</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900"
            children={<FaFacebook size={22} />}
          />

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900"
            children={<FaXTwitter size={22} />}
          />

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900"
            children={<FaInstagram size={22} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Kicker;
