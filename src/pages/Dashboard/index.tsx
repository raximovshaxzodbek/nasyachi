import React from "react";
import Navbar from "../../components/Navbar";
import MenuBar from "../../components/MenuBar";
import Statistics from "./Statistics";
import { Box } from "@mui/material";
const Dashboard = () => {
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
