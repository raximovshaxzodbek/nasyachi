import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const MenuBar = () => {
  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[300px] flex-col items-center justify-start gap-3 overflow-auto rounded-xl px-3 py-10 shadow-lg shadow-gray-400">
      <NavLink to={"/dashboard"}>
        <Button
          variant="contained"
          type="submit"
          size={"large"}
          className="w-[200px]"
          color="success"
        >
          Dashboard
        </Button>
      </NavLink>
      <NavLink to={"/products"}>
        <Button
          variant="contained"
          type="submit"
          size={"large"}
          className="w-[200px]"
          color="success"
        >
          Products
        </Button>
      </NavLink>
      <NavLink to={"/clients"}>
        <Button
          variant="contained"
          type="submit"
          size={"large"}
          className="w-[200px]"
          color="success"
        >
          Clients
        </Button>
      </NavLink>
    </Box>
  );
};

export default MenuBar;
