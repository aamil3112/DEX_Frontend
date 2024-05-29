import AnimatedNumber from "../components/AnimatingNumber";
import Glassmorphosim from "../components/Glassmorphosim";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import PoolForm from "../components/PoolForm";
import { useState } from "react";

const Pool = () => {
  const totalValueLocked = 411502134;
  const [showPoolForm, setShowPoolForm] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 ">
        <div className="text-center">
          <p className="text-2xl pb-1">Total Value Locked</p>
          <p className="text-5xl text-[#F3BB1B] font-bold flex">
            $ <AnimatedNumber value={totalValueLocked} />
          </p>
        </div>
        <div className="pt-6 pb-2 w-2/5">
          <Glassmorphosim>
            {!showPoolForm && (
              <>
                <button
                  onClick={() => setShowPoolForm(!showPoolForm)}
                  className="w-2/3 mt-6 rounded-md bg-[#F3BB1B] px-4 py-[14px] text-xl font-semibold cursor-pointer"
                >
                  Add Liquidity
                </button>
                <div className="flex justify-between items-center w-2/3 mt-2">
                  <p className="text-white font-medium">Your Liquidity</p>
                  <BsQuestionCircle color="#F3BB1B" size={20} />
                </div>
                <div className="w-2/3 flex flex-row justify-center items-center mt-10 space-x-4">
                  <div className="flex items-center space-x-3 w-auto rounded-md bg-white px-4 text-sm py-[7px] text-black font-semibold cursor-pointer">
                    <IoWalletOutline size={20} />
                    <button>Connect to a wallet to view your liquidity</button>
                  </div>
                  <IoMdArrowForward size={24} color="white" />
                </div>
              </>
            )}

            {showPoolForm && <PoolForm />}
          </Glassmorphosim>
        </div>
        <div>
          <ul className="flex justify-between space-x-6 divide-x-2 text-sm">
            <li className="cursor-pointer">Developer Documentation</li>
            <li className="pl-4 cursor-pointer">Terms of Service</li>
            <li className="pl-4 cursor-pointer">Privacy Policy</li>
            <li className="pl-4 cursor-pointer">Whistkeblower</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pool;
