import { useState } from "react";
import DropdownButton from "../components/DropDownButton";
import InputField from "../components/InputField";
import { IoAddOutline } from "react-icons/io5";
import PoolTable from "./PoolTable";

const PoolForm = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromToken, setFromToken] = useState("Select a token");
  const [toToken, setToToken] = useState("Select a token");
  const [error, setError] = useState("");
  const[showPoolTable, setShowPoolTable] = useState(false);

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
      type="number"
        label="Input"
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

      <div className="flex flex-row justify-between items-center md:items-start md:space-x-4 text-white">
        <IoAddOutline className="my-6 md:mt-12" />
        <p className="md:mt-12">Advanced Settings</p>
      </div>

      <InputField
      type="number"
        label="Input"
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
      {showPoolTable &&     <PoolTable/>}
      <button onClick={()=>setShowPoolTable(!showPoolTable)} className="w-full md:w-3/4 mt-14 rounded-md bg-[#F3BB1B] px-4 py-[10px] font-semibold cursor-pointer">
        Connect To Wallet
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};


export default PoolForm;
