import Button from "@components/Common/Button";
import MenuItem from "./MenuItem";

import {
  GlobeAltIcon,
  IdentificationIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@slices/userApiSlice";
import { logout } from "@slices/authSlice";

const DesktopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
      {userInfo ? (
        <>
          {" "}
          <MenuItem
            url={"/MyPortfolio"}
            label="My Portfolio"
            icon={IdentificationIcon}
          />
          <MenuItem
            url={`portfolio/${userInfo.username}`}
            label="Public Portfolio"
            icon={GlobeAltIcon}
          />
          <div className="relative z-50" ref={menuRef}>
            <button
              className=" focus:outline-offset-3 rounded-full bg-gray-200 p-2 focus:outline"
              onClick={() => setIsOpen(!isOpen)}
            >
              <UserIcon className="h-5 w-5" />
            </button>
            {isOpen && (
              <nav className="absolute right-0 top-10 min-w-48 rounded-lg bg-white shadow-md">
                <div className="border-b border-slate-300 p-4 pb-3">
                  <p className="text-sm leading-normal">
                    <span className="font-semibold text-gray-900">
                      {userInfo.name}
                    </span>
                    <br />
                    <span className="text-gray-900">{userInfo.email}</span>
                  </p>
                </div>
                <Link
                  to={"/profile"}
                  className="block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-300"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300"
                >
                  Logout
                </button>
              </nav>
            )}
          </div>
        </>
      ) : (
        <>
          <MenuItem url="/login" label="Login" icon={UserIcon} />
          <Button url={"/register"} Content={"Sign In"} />
        </>
      )}
    </nav>
  );
};

export default DesktopMenu;
