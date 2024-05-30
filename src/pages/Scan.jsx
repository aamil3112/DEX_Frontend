import AreaChartComp from "../components/AreaChartComp";
import Search from "../components/Search";
import TableCom from "../components/TableCom";
import PolicyOptions from "../components/PolicyOptions";
import SwitchComp from "../components/SwitchComp";

const Scan = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-6">
      <Search />
      <div className="pl-4 pb-4 flex flex-col sm:flex-row flex-wrap items-start 
      sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white">
  <p className="text-lg md:text-xl font-bold">POX Price: $0.1223</p>
  <p className="font-medium">Pairs: 20,606</p>
  <p className="font-medium">Transactions (24hr): 2,464</p>
  <p className="font-medium">New Pairs (24hr): 0</p>
</div>

      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-white rounded-3xl px-2 md:px-6 lg:px-6 py-4 md:py-6 lg:py-6 w-full lg:w-1/2">
          <p>Liquidity</p>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-medium">$161,187,730</p>
            <p className="text-green-500">+0.52%</p>
          </div>
          <AreaChartComp />
        </div>
        <div className="bg-white rounded-3xl px-6 py-6 w-full lg:w-1/2">
          <div className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
          <p className="text-lg font-medium">$161,187,730</p>
            <p className="text-green-500">+0.52%</p>
          </div>
          <div>
            <SwitchComp/>
          </div>
          </div>
          <AreaChartComp />
        </div>
      </div>
      <div className="pl-4">
        <p className="font-medium text-lg mt-6 mb-2 text-white">Hot Tokens</p>
        <TableCom />
      </div>
      <div className="pl-4">
        <p className="font-medium text-lg mt-6 mb-2 text-white">Trading Pair</p>
        <TableCom />
      </div>
      <div className="pl-4">
        <p className="font-medium text-lg mt-6 mb-2 text-white">Transactions</p>
        <TableCom />
      </div>
      <PolicyOptions/>

    </div>
  );
};

export default Scan;
