import { useSelector } from "react-redux";
import RoutesPage from "./router";
import { Box } from "@mui/material";
import { RootState } from "../app/store";
import ClientPortal from "./components/ClientPortal";
import PurchasePortal from "./components/PurchasePortal";
const App = () => {
  const { isClientPortal, isPurchasePortal } = useSelector(
    (state: RootState) => state.portal
  );
  return (
    <Box className="p-3">
      {isClientPortal ? <ClientPortal /> : null}
      {isPurchasePortal ? <PurchasePortal /> : null}
      <RoutesPage />
    </Box>
  );
};

export default App;
