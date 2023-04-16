import { useState, useEffect } from "react";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";

const DelayedGoods = () => {
  const [not_completed_products, set_not_completed_products] = useState(
    [] as any[]
  );
  const [customers, setCustomers] = useState([] as any[]);
  useEffect(() => {
    const get_not_completed = async (url: string) => {
      const notCompletedProducts = await Axios.get(url, {
        headers: headers,
      });
      set_not_completed_products(notCompletedProducts.data);
    };
    get_not_completed("/purchases/not_completed/");

    const getCustomers = async (url: string) => {
      const customer = await Axios.get(url, { headers });
      setCustomers(customer.data);
    };
    getCustomers("/customer/");
  }, [not_completed_products]);

  return (
    <table className="w-full border border-black text-center">
      <caption className="mx-auto my-4 w-[300px] rounded-xl bg-blue-500 px-4 py-2 text-center text-white">
        Mudati O'tib ketgan maxsulotlar
      </caption>
      <thead>
        <tr className="h-[50px] border border-black">
          <th>Id</th>
          <th>Mijoz</th>
          <th>Maxsulot</th>
          <th>Shu oygacha qarzi</th>
          <th>Sana</th>
        </tr>
      </thead>
      <tbody>
        {not_completed_products.map((product: any, index) => (
          <tr className="h-[50px]" key={product.id}>
            <td>{product.id}</td>
            <td>{""}</td>
            <td>{product.product_name}</td>
            <td>{product.current_debt}</td>
            <td>{product.created_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DelayedGoods;
