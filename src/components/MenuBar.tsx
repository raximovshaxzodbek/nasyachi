import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Menu from "./Menu.json";
const MenuBar = () => {
  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[60px] flex-col items-center justify-start gap-3 overflow-auto rounded-xl px-3 py-10 shadow-lg shadow-gray-400 duration-300 lg:w-[300px]">
      {Menu.map((item) => {
        return (
          <NavLink to={item.url} key={item.id}>
            <Button
              variant="contained"
              type="submit"
              size={"large"}
              className="w-[50px] lg:w-[200px]"
              color="success"
            >
              {window.innerWidth > 824 ? item.text : "icon"}
            </Button>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default MenuBar;
