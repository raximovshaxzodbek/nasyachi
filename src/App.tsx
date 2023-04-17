import { useSelector } from "react-redux";
import RoutesPage from "./router";
import { Box } from "@mui/material";
import { RootState } from "../app/store";
import ClientPortal from "./components/ClientPortal";
import PurchasePortal from "./components/PurchasePortal";
import CategoryPortal from "./components/CategoryPortal";
const App = () => {
  const { isClientPortal, isPurchasePortal, isCategoryPortal } = useSelector(
    (state: RootState) => state.portal
  );

  return (
    <Box className="p-3">
      {isClientPortal ? <ClientPortal /> : null}
      {isPurchasePortal ? <PurchasePortal /> : null}
      {isCategoryPortal ? <CategoryPortal /> : null}
      <RoutesPage />
    </Box>
  );
};

export default App;
