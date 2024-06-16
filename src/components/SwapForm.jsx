import { useEffect, useState } from "react";
import { TbArrowsDownUp,TbArrowsUpDown  } from "react-icons/tb";
import DropdownButton from "../components/DropDownButton";
import InputField from "../components/InputField";
import Logo from "../assets/Logo.png";
import { IoAddOutline } from "react-icons/io5";
import { GrSubtract } from "react-icons/gr";
import { getSwap, getSwapAmount } from "../utils/Axios";
import { useSelector } from "react-redux";
import SlippageDropDown from "./SlippageDropDown";

const SwapForm = () => {
  const walletAddress = useSelector((state) => state?.wallet);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromToken, setFromToken] = useState("Select a token");
  const [toToken, setToToken] = useState("Select a token");
  const [showRecipient, setShowRecipient] = useState(false);
  const [slippage, setSlippage] = useState('');
  const [customSlippage, setCustomSlippage] = useState('');
  const [swapArrowState, setSwapArrowState] = useState(true);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getSwapAmount(fromAmount);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [fromAmount]);

  const handleSwap = () => {
    const isValidInput =
      fromAmount &&
      fromToken !== "Select a token" &&
      toToken !== "Select a token";
    if (!isValidInput) {
      alert("Enter both input value and select both tokens.")
      return;
    }
    getSwap(walletAddress?.address, fromAmount, fromToken, toToken);
  };

  const handleReverseToken = () => {
    if (fromToken === "Select a token" || toToken === "Select a token") {
      alert("Please select both tokens before swapping.");
      return;
    }

    setSwapArrowState(!swapArrowState);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromToken(toToken);
    setToToken(fromToken);
  };

  const handleFromTokenSelect = (token) => {
    if (token === toToken) {
      alert("You cannot select the same token for both fields.");
    } else {
      setFromToken(token);
    }
  };

  const handleToTokenSelect = (token) => {
    if (token === fromToken) {
      alert("You cannot select the same token for both fields.");
    } else {
      setToToken(token);
    }
  };

  return (
    <div className="w-full pt-6 md:pt-12">
      <InputField
        type="number"
        label="From"
        placeholder="Enter an amount"
        value={fromAmount}
        onChange={(e) => setFromAmount(e.target.value)}
      >
        <DropdownButton
          selectedOption={fromToken}
          onOptionSelect={handleFromTokenSelect}
          otherSelectedOption={toToken}
        />
      </InputField>

    {swapArrowState? <TbArrowsDownUp
        size={20}
        className="my-4 md:my-8"
        style={{ cursor: "pointer" }}
        onClick={handleReverseToken}
        color="white"
      />:  <TbArrowsUpDown
      size={20}
      className="my-4 md:my-8"
      style={{ cursor: "pointer" }}
      onClick={handleReverseToken}
      color="white" />}

      <InputField
        type="number"
        label="To"
        placeholder="Enter an amount"
        value={toAmount}
        onChange={(e) => setToAmount(e.target.value)}
      >
        <DropdownButton
          selectedOption={toToken}
          onOptionSelect={handleToTokenSelect}
          otherSelectedOption={fromToken}
        />
      </InputField>

      <SlippageDropDown 
        slippage={slippage} 
        setSlippage={setSlippage} 
        customSlippage={customSlippage}
        setCustomSlippage={setCustomSlippage}
      /> 

      <div className="flex items-center justify-end mt-2 mb-6 w-full cursor-pointer">
        <button
          onClick={() => setShowRecipient(!showRecipient)}
          className="flex items-center space-x-1 text-green-500"
        >
          {showRecipient ? (
            <GrSubtract size={20} />
          ) : (
            <IoAddOutline size={20} />
          )}
          <p className="font-bold">
            {showRecipient ? "Remove Recipient" : "Add Recipient"}
          </p>
        </button>
      </div>

      {showRecipient && (
        <InputField
          type="text"
          label="Recipient"
          placeholder="Input wallet Address"
          onChange={(e) => setFromAmount(e.target.value)}
        />
      )}
      <div className="text-center">
        <p className="text-[#F3BB1B] cursor-pointer mt-2 font-bold">
          View Token
        </p>

        <div className="flex items-center justify-center space-x-2 py-2 md:py-4 font-semibold">
          <img src={Logo} alt="pox-logo" className="w-8 h-8 md:h-auto" />
          <p className="text-white font-bold">POX</p>
        </div>

        <button onClick={handleSwap} className="font-bold w-full md:w-3/4 mt-6 rounded-md bg-[#F3BB1B] px-4 py-[7px] cursor-pointer">
          {walletAddress?.address ? "Swap" : "Connect To Wallet"}
        </button>
      </div>
    </div>
  );
};

export default SwapForm;
