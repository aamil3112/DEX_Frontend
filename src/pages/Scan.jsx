import AreaChartComp from "../components/AreaChartComp"
import TableCom from "../components/TableCom"


const Scan = () => {
  return (
    <>
    <div className="px-12 py-12 bg-purple-500">
      <div className="pl-4 pb-4 flex items-center space-x-6 text-white">
        <p className="text-xl font-bold">POX Price: $ 0.1223</p>
        <p className="font-medium">Pairs:20,606</p>
        <p className="font-medium">Transactions {"(24hr)"}: 2,464</p>
        <p className="font-medium">New Pairs {"(24hr)"}: 0</p>
      </div>
      <div className="flex justify-between items-center space-x-6">
        <div className="bg-white rounded-3xl px-6 py-12">
        <AreaChartComp/>
        </div>
        <div className="bg-white rounded-3xl px-6 py-12">
    <AreaChartComp/>
        </div>
      </div>
      <div className="pl-4">
        <p className="font-medium text-lg mt-6 mb-2 text-white">Hot Tokens</p>
        <TableCom/>
      </div>
      <div className="pl-4">
        <p className="font-medium text-lg mt-6 mb-2 text-white">Trading Pair</p>
           <TableCom/>
      </div>
      <div className="pl-4">
        <p className="font-medium text-lg mt-6 mb-2 text-white">Transactions</p>
           <TableCom/>
      </div>
      <div>
             <ul className="flex justify-center space-x-4 divide-x-2 text-sm text-white pt-4">
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

export default Scan