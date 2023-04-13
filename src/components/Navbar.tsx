import { Button, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addClientPortal, addPurchasePortal } from "../../app/portal.slice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex min-h-[80px] w-full flex-wrap items-center justify-between rounded-b-lg px-10 shadow-md shadow-gray-400">
      <Box>
        <Link to={"/user"} className="text-2xl font-semibold">
          Logo
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            dispatch(addClientPortal());
          }}
        >
          New Client
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            dispatch(addPurchasePortal());
          }}
        >
          New Purchase
        </Button>
        <Box className="group relative cursor-pointer">
          <AccountCircleIcon color="primary" fontSize="large" />
          <Box className="user absolute right-0 top-full flex min-h-[40px] min-w-[200px] scale-0 flex-col gap-3 rounded-xl bg-white p-3 shadow-xl shadow-gray-400 duration-300 group-hover:scale-100">
            <h4 className="hover:text-blue-500">webshohdev@gmail.com</h4>
            <ExitToAppIcon fontSize="medium" className="hover:text-red-500" />
          </Box>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
