import { useEffect, useState } from "react";
import { TbArrowsDownUp } from "react-icons/tb";
import DropdownButton from "../components/DropDownButton";
import InputField from "../components/InputField";
import Logo from "../assets/Logo.png";
import { IoAddOutline } from "react-icons/io5";
import { GrSubtract } from "react-icons/gr";
import { getSwap } from "../utils/Axios";
import { useSelector } from "react-redux";

const SwapForm = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromToken, setFromToken] = useState("Select a token");
  const [toToken, setToToken] = useState("Select a token");
  const [error, setError] = useState("");
  const [showRecipient, setShowRecipient] = useState(false);
  const walletAddress = useSelector((state) => state?.wallet);

  useEffect(() => {
    const isValidInput =
      fromAmount &&
      fromToken !== "Select a token" &&
      toToken !== "Select a token";
    if (!isValidInput) {
      return;
    }

    const debounceTimer = setTimeout(() => {
      getSwap(walletAddress?.address,fromAmount, fromToken, toToken);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [fromAmount, toAmount, fromToken, toToken]);

  const handleSwap = () => {
    if (fromToken === "Select a token" || toToken === "Select a token") {
      setError("Please select both tokens before swapping.");
      return;
    }
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromToken(toToken);
    setToToken(fromToken);
    setError("");
  };

  console.log(fromToken, toToken);

  const handleFromTokenSelect = (token) => {
    if (token === toToken) {
      setError("You cannot select the same token for both fields.");
    } else {
      setFromToken(token);
      setError("");
    }
  };

  const handleToTokenSelect = (token) => {
    if (token === fromToken) {
      setError("You cannot select the same token for both fields.");
    } else {
      setToToken(token);
      setError("");
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

      <TbArrowsDownUp
        size={20}
        className="my-4 md:my-8"
        style={{ cursor: "pointer" }}
        onClick={handleSwap}
        color="white"
      />

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

        <button className="font-bold w-full md:w-3/4 mt-6 rounded-md bg-[#F3BB1B] px-4 py-[7px] cursor-pointer">
          {walletAddress?.address ? "Swap" : "Connect To Wallet"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SwapForm;
