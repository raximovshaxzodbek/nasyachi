import ReactLoading, { LoadingProps } from "react-loading";
const Loading = ({ type, color }: LoadingProps) => {
  return <ReactLoading type={type} color={color} height={400} width={300} />;
};

export default Loading;
