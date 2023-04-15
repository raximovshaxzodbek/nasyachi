import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MenuBar from "../../components/MenuBar";
import Statistics from "./Statistics";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Axios } from "../../../api/Axios";

const Dashboard = () => {
  const { username, password } = useSelector((state: RootState) => state.login);
  useEffect(() => {
    const getAccessToken = async () => {
      const access = await Axios.post("/obtain-token/", {
        username,
        password,
      });
      localStorage.setItem("token", access.data.token);
    };
    getAccessToken();
  }, []);
  return (
    <Box>
      <Navbar />
      <Box className="flex w-full justify-between">
        <MenuBar />
        <Statistics />
      </Box>
    </Box>
  );
};

export default Dashboard;
