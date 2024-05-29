import { useState } from "react";
import Glassmorphosim from "../components/Glassmorphosim"
import Logo from "../assets/Logo.png";
import { IoAddOutline } from "react-icons/io5";
import SwapForm from "../components/SwapForm";
import AnimatedNumber from "../components/AnimatingNumber";
import InputField from "../components/InputField";
import { GrSubtract } from "react-icons/gr";

const Home = () => {
  const totalValueLocked = 411502134;
  const [showRecipient, setShowRecipient] = useState(false);
  return (
    <>
    <div className="flex flex-col items-center justify-center pt-12">
      <div className="text-center">
        <p className="text-2xl pb-1">Total Value Locked</p>
        <p className="text-5xl text-[#F3BB1B] font-bold flex">
        $ <AnimatedNumber value={totalValueLocked}/>
        </p>
      </div>
      <div className="pt-6 pb-2 w-2/5">
        <Glassmorphosim>
          <SwapForm/>
          <div className="flex space-x-1 justify-end items-center mt-2 mb-6 w-full cursor-pointer">
          {showRecipient ?<GrSubtract color="green"  />: <IoAddOutline color="green" /> }
          
          <p className="text-green-600" onClick={()=>setShowRecipient(!showRecipient)}> 
          {showRecipient ?"Remove Recipient":"Add Recipient"}
          </p>
          </div>
          {showRecipient && 
          <InputField
          label="Recipient"
          placeholder="Input wallet Address"
          onChange={(e) => setFromAmount(e.target.value)}></InputField>}
          
          <p className="text-[#F3BB1B] cursor-pointer">View Token</p>
          <div className="flex space-x-2 items-center py-4 font-bold">
            <img src={Logo} alt="" width={30} />
            <p>POX</p>
          </div>
          <button className="w-3/4 mt-6 rounded-md bg-[#F3BB1B] px-4 py-[7px] font-semibold cursor-pointer">
            Connect To Wallet
          </button>
          </Glassmorphosim>
      </div>
      <div>
             <ul className="flex justify-between space-x-4 divide-x-2 text-sm">
              <li className="cursor-pointer">Developer Documentation</li>
              <li className="pl-4 cursor-pointer">Terms of Service</li>
              <li className="pl-4 cursor-pointer">Privacy Policy</li>
              <li className="pl-4 cursor-pointer">Whistkeblower</li>
            </ul>
          </div>
          
    </div>
    </>
  )
}

export default Home