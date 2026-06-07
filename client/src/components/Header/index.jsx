import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full bg-white  border-b border-slate-200">
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:py-2 lg:px-40">
        <div className="relative h-16 flex items-center justify-between">
          <Logo />
          <DesktopMenu />
          <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {/* Mobile Menu */}
      <div>{isOpen && <MobileMenu />}</div>
    </header>
  );
};

export default Header;
