import { Chart } from "react-google-charts";

export const data = [
  ["Yil", "Samsung", "Apple", "Xiami"],
  ["2020", 2, 1, 0],
  ["2021", 2, 1, 3],
  ["2022", 1, 3, 4],
  ["2023", 5, 6, 4],
];

export const options = {
  chart: {
    title: "Turlar",
    subtitle: "Boshlangan vaqtdan buyon harid qilingan maxsulotlar turlari",
  },
};

const BarChart = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default BarChart;
