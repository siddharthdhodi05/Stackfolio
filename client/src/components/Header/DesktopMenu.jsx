import Button from "@components/Common/Button";
import MenuItem from "./MenuItem";

import { UserIcon } from "@heroicons/react/24/outline";

const DesktopMenu = () => {
  return (
    <nav className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
      <MenuItem url="/login" label="Login" icon={UserIcon} />
      <Button url={"/register"} Content={"Sign In"} />
    </nav>
  );
};

export default DesktopMenu;
