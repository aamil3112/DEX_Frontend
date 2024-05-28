import { useState } from "react";
import Glassmorphosim from "../components/Glassmorphosim"
import Input from "../components/Input"
import { TbArrowsDownUp } from "react-icons/tb";
import Logo from "../assets/Logo.png";
import { IoAddOutline } from "react-icons/io5";

const Home = () => {
  const [exhangeCurrency, setExchangeCurrency] = useState("");
  const [showRecipient, setShowRecipient] = useState(false);
  return (
    <>
    <div className="flex flex-col items-center justify-center pt-12">
      <div className="text-center">
        <p className="text-2xl pb-1">Total Value Locked</p>
        <p className="text-6xl text-[#F3BB1B] font-bold">$ 411,502,134</p>
      </div>
      <div className="pt-6 pb-2">
        <Glassmorphosim>
          <Input/>
          <TbArrowsDownUp />
          <Input/>
          <div className="flex space-x-1 justify-end items-center border-2">
          <IoAddOutline color="green" />
          <p className="text-green-600"> Add Recipient</p>
          </div>
          <p>View Token</p>
          <div className="flex space-x-2 items-center py-4 font-bold">
            <img src={Logo} alt="" width={30} />
            <p>POX</p>
          </div>
          <button className="mt-6 rounded-md bg-[#F3BB1B] px-4 py-[7px] font-semibold cursor-pointer">
            Connect To Wallet
          </button>
          </Glassmorphosim>
      </div>
      <div>
             <ul className="flex justify-between space-x-6 divide-x-2">
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