import Link from "next/link";

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Dot } from "lucide-react";

const Kicker = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      {/* Left side - Copyright and links */}
      <div className="flex flex-wrap items-center justify-center space-x-1 text-sm text-gray-600">
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
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <span>🌐</span>
            <span>Português (BR)</span>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <span>$ BRL</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900"
            children={<FaFacebook size={18} />}
          />

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900"
            children={<FaXTwitter size={18} />}
          />

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900"
            children={<FaInstagram size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Kicker;
