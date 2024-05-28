import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-t from-violet-600 via-violet-600 to-indigo-600 text-white">
        <div className="flex justify-between space-x-4 divide-x-2">
          <Link to="/">
          <div className="">POX SWAP</div>
          </Link>
          <div>
            <ul className="flex justify-between space-x-12">
              <Link to="/swap">
                <li className="pl-12 cursor-pointer">Swap</li>
              </Link>
              <Link to="/pool">
                <li className="cursor-pointer">Pool</li>
              </Link>
              <Link to="/scan">
                <li className="cursor-pointer">Scan</li>
              </Link>
              <Link to="/lppools">
                <li className="cursor-pointer">LP Pools</li>
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
