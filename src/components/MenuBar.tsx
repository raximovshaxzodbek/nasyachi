import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Menu from "./Menu.json";
const MenuBar = () => {
  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[300px] flex-col items-center justify-start gap-3 overflow-auto rounded-xl px-3 py-10 shadow-lg shadow-gray-400">
      {Menu.map((item) => {
        return (
          <NavLink to={item.url} key={item.id}>
            <Button
              variant="contained"
              type="submit"
              size={"large"}
              className="w-[200px]"
              color="success"
            >
              {item.text}
            </Button>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default MenuBar;
