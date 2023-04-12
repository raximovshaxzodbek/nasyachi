import { Box } from "@mui/material";
import MenuBar from "../../components/MenuBar";
import Navbar from "../../components/Navbar";
import ClientsList from "./ClientsList";

const Clients = () => {
  return (
    <Box className={"w-full"}>
      <Navbar />
      <Box className={"flex w-full justify-between"}>
        <MenuBar />
        <ClientsList />
      </Box>
    </Box>
  );
};

export default Clients;
