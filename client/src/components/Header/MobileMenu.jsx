import {
  ArrowLeftEndOnRectangleIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  IdentificationIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import MobileMenuItem from "./MobileMenuItem";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  const userInfo = useSelector((state) => state.auth);
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("logout");
  };
  return (
    <nav className="relative z-10 w-full overflow-auto bg-white pb-2 sm:max-w-sm">
      <div className="h-2" />
      {userInfo ? (
        <div>
          <MobileMenuItem url={"/profile"} label="Porfile" icon={UserIcon} />
          <MobileMenuItem
            url={"/MyPortfolio"}
            label="My Portfolio"
            icon={IdentificationIcon}
          />
          <MobileMenuItem
            url={`/${userInfo.username}`}
            label="Public Portfolio"
            icon={GlobeAltIcon}
          />
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 font-medium text-base text-slate-900 transition-all hover:bg-slate-200 hover:text-indigo-700"
          >
            <span className="flex items-center gap-2">
              <ArrowLeftEndOnRectangleIcon
                strokeWidth={2}
                className="h-4 w-4"
              />
              {"Logout"}
            </span>
          </button>
        </div>
      ) : (
        <div>
          <MobileMenuItem url="/login" label="Login" icon={UserIcon} />
          <MobileMenuItem
            url="/register"
            label="Signup"
            icon={FingerPrintIcon}
          />
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
