import { useState } from "react";
import Glassmorphosim from "../components/Glassmorphosim"
import Logo from "../assets/Logo.png";
import { IoAddOutline } from "react-icons/io5";
import SwapForm from "../components/SwapForm";
import AnimatedNumber from "../components/AnimatingNumber";
import InputField from "../components/InputField";
import { GrSubtract } from "react-icons/gr";
import PolicyOptions from "../components/PolicyOptions";

const Home = () => {
  const totalValueLocked = 411502134;
  const [showRecipient, setShowRecipient] = useState(false);
  
  return (
    <div className="flex flex-col md:items-center py-6 justify-center px-4 min-h-screen">
      <div className="text-center">
        <p className="text-lg md:text-2xl pb-1 text-white">Total Value Locked</p>
        <p className="text-3xl md:text-5xl text-[#F3BB1B] font-bold flex items-center justify-center">
          $ <AnimatedNumber value={totalValueLocked}/>
        </p>
      </div>
      
      <div className="pt-6 pb-2 w-full md:w-2/5">
        <Glassmorphosim>
          <SwapForm/>
          
          <div className="flex items-center justify-end mt-2 mb-6 w-full cursor-pointer">
            <button onClick={() => setShowRecipient(!showRecipient)} className="flex items-center space-x-1 text-green-500">
              {showRecipient ? <GrSubtract size={20} /> : <IoAddOutline size={20} /> }
              <p className="font-bold">
                {showRecipient ? "Remove Recipient" : "Add Recipient"}
              </p>
            </button>
          </div>
          
          {showRecipient && 
            <InputField
            type="text"
              label="Recipient"
              placeholder="Input wallet Address"
              onChange={(e) => setFromAmount(e.target.value)}
            />
          }
          
          <p className="text-[#F3BB1B] cursor-pointer mt-2">View Token</p>
          
          <div className="flex items-center space-x-2 py-2 md:py-4 font-semibold">
            <img src={Logo} alt="pox-logo" className="w-8 h-8 md:h-auto" />
            <p className="text-white">POX</p>
          </div>
          
          <button className="w-full md:w-3/4 mt-6 rounded-md bg-[#F3BB1B] px-4 py-[7px] font-semibold cursor-pointer">
            Connect To Wallet
          </button>
          
        </Glassmorphosim>
      </div>
      
     <PolicyOptions/>

      
    </div>
  )
}

export default Home;
