import { useEffect, useState } from "react";
import { Axios } from "../../../api/Axios";
import { useNavigate } from "react-router-dom";
import { headers } from "../../components/headers";
export interface CustomerType {
  id: Number;
  name: String;
  passport_num: String;
  phone_num: String;
}
const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);
  const [customers, setCustomers] = useState([] as CustomerType[]);

  const navigate = useNavigate();
  useEffect(() => {
    const getPurchases = async () => {
      const purchases = await Axios.get("/purchases/", {
        headers,
      });
      setPurchases(purchases.data);
      purchases.data.map((purchase: any) => {
        Axios.get(`/customer/${purchase.customer}/`, {
          headers,
        })
          .then((customer) => {
            console.log(customer.data.name);
          })

          .catch((err) => {
            console.error(err);
          });
      });
    };

    getPurchases();
  }, []);

  return (
    <div className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      <table className="w-[98%] border border-black text-center">
        <thead>
          <tr className="h-[50px] border border-black">
            <th>ID</th>
            <th>Mijoz ismi</th>
            <th>Mahsulot</th>
            <th>Shu oygacha qarz</th>
            <th>Nechinchi to'lov</th>
            <th>Sana</th>
            <th>To'lov valyutasi</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase: any, id) => {
            return (
              <tr
                onClick={() => {
                  navigate(`/purchases/${purchase.id}`);
                  localStorage.setItem("onePurchase", purchase.id);
                }}
                key={id}
                className="h-[50px] cursor-pointer border border-black"
              >
                <td>{purchase.id}</td>
                <td>{null}</td>
                <td>{purchase.product_name}</td>
                <td>{purchase.current_debt} so'm</td>
                <td>{purchase.staff}</td>
                <td>{purchase.created_date}</td>
                <td>So'm</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseList;
