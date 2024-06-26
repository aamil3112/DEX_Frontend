import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const POX_TOKEN_ADDRESS = import.meta.env.VITE_POX_TOKEN_ADDRESS;
const USDX_TOKEN_ADDRESS = import.meta.env.VITE_USDX_TOKEN_ADDRESS;


export const getSwap = async (walletAddress,amountIn,fromToken,toToken) => {
    console.log(fromToken, toToken);
  try {
    const response = await axios.post(BASE_URL + "/swap", {
      walletAddress: walletAddress,
      amountIn: "5000",
    });
    console.log(response?.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSwapAmount = async(amountIn)=>{
    try {
        const response = await axios.post(BASE_URL+"/getAmountOut",{
            amountIn,
        })
        return response?.data?.data[0]?.hex;
    } catch (error) {
        console.log(error);
    }
}

export const getAddLiquidity = async (walletAddress,fromAmount, toAmount, fromToken, toToken) => {
    let from_Token;
    let to_Token;

    if (fromToken === "POX") {
        from_Token = POX_TOKEN_ADDRESS;
    } else if (fromToken === "USDX") {
        from_Token = USDX_TOKEN_ADDRESS;
    }

    if (toToken === "POX") {
        to_Token = POX_TOKEN_ADDRESS;
    } else if (toToken === "USDX") {
        to_Token = USDX_TOKEN_ADDRESS;
    }

    // Ensure that both tokens are assigned correctly
    if (!from_Token || !to_Token) {
        console.log("Invalid token addresses");
        return;
    }

    try {
        const response = await axios.post(`${BASE_URL}/addLiquidity`, {
            amountA: fromAmount,
            amountB: toAmount,
            walletAddress: walletAddress,
            fromToken: from_Token,
            toToken: to_Token,
        });
            return response.data;
    } catch (error) {
        console.log(error);
    }
};