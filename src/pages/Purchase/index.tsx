import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import MenuBar from "../../components/MenuBar";
import PurchaseList from "./PurchaseList";

const Purchase = () => {
  return (
    <Box>
      <Navbar />
      <Box className={"flex w-full items-center justify-between"}>
        <MenuBar />
        <PurchaseList />
      </Box>
    </Box>
  );
};

export default Purchase;
