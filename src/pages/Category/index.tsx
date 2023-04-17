import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import MenuBar from "../../components/MenuBar";
import CategoryList from "./CategoryList";
const Category = () => {
  return (
    <Box className={"w-full"}>
      <Navbar />
      <Box className={"flex w-full justify-between"}>
        <MenuBar />
        <CategoryList />
      </Box>
    </Box>
  );
};

export default Category;
