import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex min-h-[80px] w-full flex-wrap items-center justify-between rounded-b-lg px-10 shadow-md shadow-gray-400">
      <Box>
        <Link to={"/user"} className="text-2xl font-semibold">
          Logo
        </Link>
      </Box>
      <Box>
        <Button type="button" variant="contained">
          Add Product
        </Button>
      </Box>
    </nav>
  );
};

export default Navbar;
