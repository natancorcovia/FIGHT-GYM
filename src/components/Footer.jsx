import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} FIGHT-BOX. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
