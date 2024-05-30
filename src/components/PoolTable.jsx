import Logo from "../assets/Logo.png";

const PoolTable = () => {
  return (
    <div>
        <p>View Token</p>
        <div className="flex justify-center items-center text-white space-x-6">
        <div className="flex items-center space-x-2 py-2 md:py-4 font-semibold">
            <img src={Logo} alt="pox-logo" className="w-8 h-8 md:h-auto" />
            <p>POX</p>
            </div>
            <div className="flex items-center space-x-2 py-2 md:py-4 font-semibold">
            <img src={Logo} alt="pox-logo" className="w-8 h-8 md:h-auto" />
            <p>UXDX</p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between text-white">
        <div>
            <p>POX per UXDX</p>
        </div>
        <div>
            <p>UXDX per POX</p>
        </div>
        <div>
            <p>Share of Pool</p>
        </div>
        </div>

        <div className="flex flex-row items-center justify-between text-white">
        <div>
            <p>POX</p>
        </div>
        <div>
            <p>UXDX</p>
        </div>
        <div>
            <p>Pool Tokens</p>
        </div>
        </div>

    </div>
  )
}

export default PoolTable