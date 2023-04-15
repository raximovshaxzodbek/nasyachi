import React, { useEffect, useState } from "react";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";

const CustomerProducts = () => {
  const [products, setProducts] = useState<[] | any>([]);
  const [productsLoading, setProductsLoading] = useState<Boolean>(false);
  let filterProducts: any[] = [];
  useEffect(() => {
    const getProducts = async (url: string) => {
      const product = await Axios.get(url, { headers });

      setProducts(product.data);
    };
    getProducts("/purchases/");
    setProductsLoading(true);
  }, []);
  let clientString: any = localStorage.getItem("client");
  let client = JSON.parse(clientString);

  if (productsLoading) {
    products.filter((product: any) => {
      if (product.customer === client.id) {
        filterProducts.push(product);
      }
      console.log(filterProducts);
    });
  }

  return (
    <div className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      CustomerProducts
    </div>
  );
};

export default CustomerProducts;
