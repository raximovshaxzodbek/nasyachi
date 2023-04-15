import React from "react";
import Navbar from "../../components/Navbar";
import MenuBar from "../../components/MenuBar";
import CustomerProducts from "./CustomerProducts";
import { Box } from "@mui/material";
const OneClient = () => {
  return (
    <Box className={"w-full"}>
      <Navbar />
      <Box className={"flex w-full justify-between"}>
        <MenuBar />
        <CustomerProducts />
      </Box>
    </Box>
  );
};

export default OneClient;
