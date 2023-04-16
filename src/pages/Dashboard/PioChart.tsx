import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Samsung", 10],
  ["Apple", 11],
  ["Xiami", 11],
];

export const options = {
  title: "Maxsulotlar Turlari Sotuv Hajmi",
};

const PioChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};
export default PioChart;
