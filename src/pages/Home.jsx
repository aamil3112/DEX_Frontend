import { useState } from "react";
import Glassmorphosim from "../components/Glassmorphosim"
import Input from "../components/Input"
import { TbArrowsDownUp } from "react-icons/tb";

const Home = () => {
  const [exhangeCurrency, setExchangeCurrency] = useState("");


  return (
    <>
    <div className="flex flex-col items-center justify-center pt-12">
      <div className="text-center">
        <p className="text-2xl pb-1">Total Value Locked</p>
        <p className="text-6xl text-[#F3BB1B] font-bold">$ 411,502,134</p>
      </div>
      <div className="mx-auto border-red-500 border-2 ">
        <Glassmorphosim>
          <Input/>
          <TbArrowsDownUp />
          <Input/>
          </Glassmorphosim>
      </div>
      <div>
      <div>
            <ul className="flex justify-between space-x-6 divide-x-2">
              <li className="cursor-pointer">Developer Documentation</li>
              <li className="pl-4 cursor-pointer">Terms of Service</li>
              <li className="pl-4 cursor-pointer">Privacy Policy</li>
              <li className="pl-4 cursor-pointer">Whistkeblower</li>
            </ul>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home