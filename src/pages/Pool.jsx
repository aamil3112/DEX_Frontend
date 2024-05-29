import AnimatedNumber from "../components/AnimatingNumber";
import Glassmorphosim from "../components/Glassmorphosim";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import PoolForm from "../components/PoolForm";
import { useState } from "react";
import PolicyOptions from "../components/PolicyOptions";

const Pool = () => {
  const totalValueLocked = 411502134;
  const [showPoolForm, setShowPoolForm] = useState(false);

  return (
    <div className="flex bg-purple-500 min-h-screen flex-col md:items-center justify-center py-12 px-4">
      <div className="text-center">
        <p className="text-2xl pb-1">Total Value Locked</p>
        <p className="text-5xl text-[#F3BB1B] font-bold flex items-center justify-center">
          $ <AnimatedNumber value={totalValueLocked} />
        </p>
      </div>

      <div className="pt-6 pb-2 w-full md:w-2/3">
        <Glassmorphosim>
          {!showPoolForm ? (
            <>
              <button
                onClick={() => setShowPoolForm(!showPoolForm)}
                className="w-full md:w-2/3 mt-6 rounded-md bg-[#F3BB1B] px-4 py-[14px] text-xl font-semibold cursor-pointer"
              >
                Add Liquidity
              </button>
              <div className="flex justify-between items-center w-full md:w-2/3 mt-2">
                <p className="text-white font-medium">Your Liquidity</p>
                <BsQuestionCircle color="#F3BB1B" size={20} />
              </div>
              <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-3 w-full md:w-auto rounded-md bg-white px-4 text-sm py-[7px] text-black font-semibold cursor-pointer">
                  <IoWalletOutline size={20} />
                  <button>Connect to a wallet to view your liquidity</button>
                </div>
                <IoMdArrowForward size={24} color="white" />
              </div>
            </>
          ) : (
            <PoolForm />
          )}
        </Glassmorphosim>
      </div>

    <PolicyOptions/>
    </div>
  );
};


export default Pool;
