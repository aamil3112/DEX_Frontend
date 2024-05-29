import { useState } from "react";
import DropdownButton from "../components/DropDownButton";
import InputField from "../components/InputField";
import { IoAddOutline } from "react-icons/io5";

const PoolForm = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromToken, setFromToken] = useState("Select a token");
  const [toToken, setToToken] = useState("Select a token");
  const [error, setError] = useState("");

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
    <div className="w-full text-center py-10">
      <InputField
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

      <div className="flex justify-between items-center">
        <IoAddOutline className="my-6" />
        <p>Advanced Settings</p>
      </div>

      <InputField
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
      <button className="w-3/4 mt-14 rounded-md bg-[#F3BB1B] px-4 py-[10px] font-semibold cursor-pointer">
            Connect To Wallet
          </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PoolForm;
