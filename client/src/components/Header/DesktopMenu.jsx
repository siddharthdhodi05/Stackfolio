import MenuItem from "./MenuItem";

import { FingerPrintIcon, UserIcon } from "@heroicons/react/24/outline";

const DesktopMenu = () => {
  return (
    <nav className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
      <MenuItem url="/login" label="Login" icon={UserIcon} />
      <MenuItem url="/register" label="Signup" icon={FingerPrintIcon} />
    </nav>
  );
};

export default DesktopMenu;
