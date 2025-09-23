import Separator from "@/components/ui/custom/Separator";

import Columns from "./components/Columns";
import Kicker from "./components/Kicker";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 flex flex-col w-full px-6 pt-12 pb-5 gap-y-8 bg-brand-bg-secondary mt-auto">
      <Columns />
      <Separator className="bg-gray-200" />
      <Kicker />
    </footer>
  );
};

export default Footer;
