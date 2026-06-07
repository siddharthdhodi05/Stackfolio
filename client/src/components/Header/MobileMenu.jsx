import { FingerPrintIcon, UserIcon } from "@heroicons/react/24/outline";

import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = () => {
  return (
    <nav className="relative z-10 w-full overflow-auto bg-white pb-2 sm:max-w-sm">
      <div className="h-2" />
      <div>
        <MobileMenuItem url="/login" label="Login" icon={UserIcon} />
        <MobileMenuItem url="/register" label="Signup" icon={FingerPrintIcon} />
      </div>
    </nav>
  );
};

export default MobileMenu;
