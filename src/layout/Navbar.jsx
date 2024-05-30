import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 text-white relative z-10">
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 pr-20">
            <img src={Logo} alt="pox-logo" width={30} className="transition-transform duration-300 hover:scale-110" />
            <p className="border-r-2 pr-2 font-bold">POX SWAP</p>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex justify-between space-x-12 font-bold">
              <Link to="/swap">
                <li
                  className={`cursor-pointer ${
                    currentPath === "/swap" || currentPath === "/"
                      ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]"
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
                      ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]"
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
                      ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]"
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
                      ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]"
                      : ""
                  }`}
                >
                  LP Pools
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 justify-center items-center">
          <ul className="flex justify-between space-x-6 divide-x-2 font-bold">
            <li className="cursor-pointer">LANG</li>
            <li className="pl-4 cursor-pointer">HELP</li>
            <li className="pl-4 cursor-pointer">V1</li>
          </ul>
          <button className="font-bold text-black rounded-md bg-[#F3BB1B] px-4 py-[7px] cursor-pointer">
            Connect To Wallet
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="pox-logo" width={30} className="transition-transform duration-300 hover:scale-110" />
            <p className="font-bold">POX SWAP</p>
          </Link>
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="space-y-4 font-bold">
          <Link to="/swap" onClick={toggleMenu} className={`block ${currentPath === "/swap" || currentPath === "/" ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]" : ""}`}>Swap</Link>
          <Link to="/pool" onClick={toggleMenu} className={`block ${currentPath === "/pool" ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]" : ""}`}>Pool</Link>
          <Link to="/scan" onClick={toggleMenu} className={`block ${currentPath === "/scan" ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]" : ""}`}>Scan</Link>
          <Link to="/lppools" onClick={toggleMenu} className={`block ${currentPath === "/lppools" ? "text-black rounded-lg bg-yellow-400 px-4 py-[1px]" : ""}`}>LP Pools</Link>
          <div className="flex items-center space-x-10">
            <Link to="#" onClick={toggleMenu} className="block">LANG</Link>
            <Link to="#" onClick={toggleMenu} className="block">HELP</Link>
            <Link to="#" onClick={toggleMenu} className="block">V1</Link>
          </div>
        </ul>
        <button className="font-bold mt-4 w-full rounded-md text-black bg-[#F3BB1B] px-4 py-2 cursor-pointer hover:bg-[#f2a80c] transition-colors duration-300">
          Connect To Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
