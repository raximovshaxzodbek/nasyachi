import BarChart from "./BarChart";
import DelayedGoods from "./DelayedGoods";
import PioChart from "./PioChart";
import { Box } from "@mui/material";

const Statistics = () => {
  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      <PioChart />
      <BarChart />
      <DelayedGoods />
    </Box>
  );
};

export default Statistics;
