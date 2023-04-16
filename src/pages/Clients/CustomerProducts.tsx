import { useEffect, useState } from "react";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";
import Loading from "../../components/Loading";
import { Box, Button } from "@mui/material";
import ClientProduct from "./ClientProduct";
const CustomerProducts = () => {
  const [products, setProducts] = useState<[] | any>([]);
  const [productsLoading, setProductsLoading] = useState<Boolean>(false);
  const [productID, setProductID] = useState(0);
  let filterProducts: any[] = [];
  useEffect(() => {
    const getProducts = async (url: string) => {
      const product = await Axios.get(url, { headers });
      setProducts(product.data);
      setProductsLoading(true);
    };
    getProducts("/purchases/");
  }, []);
  let clientString: any = localStorage.getItem("client");
  let client = JSON.parse(clientString);

  if (productsLoading) {
    products.filter((product: any) => {
      if (product.customer === client.id) {
        filterProducts.push(product);
      }
    });
  }

  return (
    <>
      {productsLoading ? (
        <div className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
          <Box className="flex gap-3">
            {filterProducts.length > 0 ? (
              filterProducts.map((product: any, index) => {
                return (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setProductID(index);
                    }}
                    className="rounded-xl bg-blue-500 px-4 py-2 text-lg text-white"
                    key={product.id}
                  >
                    {product.product_name}
                  </Button>
                );
              })
            ) : (
              <Box
                className={"flex h-[400px] w-full items-center justify-center"}
              >
                <h2 className="text-center text-2xl font-semibold text-blue-500">
                  Hech qanday maxsulot xarid qilinmagan
                </h2>
              </Box>
            )}
          </Box>
          <ClientProduct
            filterProducts={filterProducts}
            productID={productID}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CustomerProducts;
