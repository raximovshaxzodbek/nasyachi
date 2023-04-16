import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";
const ClientProduct = ({
  filterProducts,
  productID,
}: {
  filterProducts: any[];
  productID: number;
}) => {
  const [payments, setPayments] = useState<any[]>([]);
  useEffect(() => {
    const getPayments = async () => {};
  }, []);

  return (
    <Box className="mx-auto w-full items-center justify-center">
      {filterProducts.length > 0 && (
        <Box className="flex w-[80%] flex-wrap gap-3">
          <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Product ID</h2>
            <p>{filterProducts[productID].id}</p>
          </Box>
          <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Product Name</h2>
            <p>{filterProducts[productID].product_name}</p>
          </Box>
          <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Product Client</h2>
            <p>Customer</p>
          </Box>
          <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Telefon Asl Narxi</h2>
            <p>{filterProducts[productID].product_cost}so'm</p>
          </Box>
          <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Nasya narxi</h2>
            <p>{filterProducts[productID].base_price}so'm</p>
          </Box>
          <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Dastlabki to'lov</h2>
            <p>{filterProducts[productID].first_payment}so'm</p>
          </Box>
          <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">Nechi oyga</h2>
            <p></p>
          </Box>
          <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">To'lov turi (USZ/USD)</h2>
            <p>so'm</p>
          </Box>
          <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">To'lov sanasi 1</h2>
            <p>
              {filterProducts[productID].interval_dates ??
                filterProducts[productID].interval_dates.split(",")[0]}
            </p>
          </Box>
          <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
            <h2 className="text-lg font-semibold">To'lov sanasi 2</h2>
            <p>
              {filterProducts[productID].interval_dates ??
                filterProducts[productID].interval_dates.split(",")[1]}
            </p>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ClientProduct;
