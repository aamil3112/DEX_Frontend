import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 text-white">
        <div className="flex justify-between items-center space-x-4 ">
          <Link to="/">
            <div className="flex items-center space-x-2 pr-12">
              <img src={Logo} alt="pox-logo" width={30} />
              <p className="border-r-2 pr-2">POX SWAP</p>
            </div>
          </Link>

          <div>
            <ul className="flex justify-between space-x-12">
              <Link to="/swap">
                <li
                  className={`cursor-pointer ${
                    currentPath === "/swap" || currentPath === "/"
                      ? "rounded-lg bg-yellow-400 px-4 py-[1px]"
                      : ""
                  }`}
                >
                  Swap
                </li>
              </Link>

              <Link to="/pool">
                <li
                  className={`cursor-pointer ${
                    currentPath === "/pool"
                      ? "rounded-lg bg-yellow-400 px-4 py-[1px]"
                      : ""
                  }`}
                >
                  Pool
                </li>
              </Link>
              <Link to="/scan">
                <li
                  className={`cursor-pointer ${
                    currentPath === "/scan"
                      ? "rounded-lg bg-yellow-400 px-4 py-[1px]"
                      : ""
                  }`}
                >
                  Scan
                </li>
              </Link>
              <Link to="/lppools">
                <li
                  className={`cursor-pointer ${
                    currentPath === "/lppools"
                      ? "rounded-lg bg-yellow-400 px-4 py-[1px]"
                      : ""
                  }`}
                >
                  LP Pools
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-6">
          <div>
            <ul className="flex justify-between space-x-6 divide-x-2">
              <li className="cursor-pointer">LANG</li>
              <li className="pl-4 cursor-pointer">HELP</li>
              <li className="pl-4 cursor-pointer">V1</li>
            </ul>
          </div>
          <button className="rounded-md bg-[#F3BB1B] px-4 py-[7px] font-semibold cursor-pointer">
            Connect To Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
