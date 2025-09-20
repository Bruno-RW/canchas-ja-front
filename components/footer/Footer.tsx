import Separator from "@/components/ui/custom/Separator";

import Columns from "./components/Columns";
import Kicker from "./components/Kicker";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full px-6 pt-12 pb-5 gap-y-8 bg-gray-50 border-t border-gray-200 mt-auto">
      <Columns />
      <Separator className="bg-gray-200" />
      <Kicker />
    </footer>
  );
};

export default Footer;
