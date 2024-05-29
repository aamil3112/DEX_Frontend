import AreaChartComp from "../components/AreaChartComp";
import Search from "../components/Search";
import TableCom from "../components/TableCom";
import PolicyOptions from "../components/PolicyOptions";

const Scan = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-6 bg-purple-500">
      <Search />
      <div className="pl-4 pb-4 flex flex-col sm:flex-row flex-wrap items-start 
      sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white">
  <p className="text-lg md:text-xl font-bold">POX Price: $0.1223</p>
  <p className="font-medium">Pairs: 20,606</p>
  <p className="font-medium">Transactions (24hr): 2,464</p>
  <p className="font-medium">New Pairs (24hr): 0</p>
</div>

      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-white rounded-3xl px-2 md:px-6 lg:px-6 py-4 md:py-12 lg:py-12 w-full lg:w-1/2">
          <AreaChartComp />
        </div>
        <div className="bg-white rounded-3xl px-6 py-12 w-full lg:w-1/2">
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
