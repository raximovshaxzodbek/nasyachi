import { useEffect, useState } from "react";
import { Axios } from "../../../api/Axios";
import { useNavigate } from "react-router-dom";
import { headers } from "../../components/headers";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export interface CustomerType {
  id: Number;
  name: String;
  passport_num: String;
  phone_num: String;
}
const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getPurchases = async () => {
      const purchase = await Axios.get("/purchases/", {
        headers,
      });
      setPurchases(purchase.data);
    };

    getPurchases();

    purchases.map((purchase: any) => {
      const getCustomers = async () => {
        const customer = await Axios.get(`/customer/${purchase.customer}/`, {
          headers,
        });
      };
      getCustomers();
    });
  }, [purchases]);

  const deletPurchase = async (id: string) => {
    navigate("/clients");
    if (confirm("Rostan ham bu masulotni o'chirishni istaysizmi?")) {
      Axios.delete(`/customer/${id}/`, { headers });
    }
  };

  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100%-80px)] flex-col items-start justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400 lg:w-[calc(100%-340px)]">
      <table className="w-[800px] border border-black text-center">
        <thead>
          <tr className="h-[50px] border border-black">
            <th className="w-[40px]">ID</th>
            <th className="w-[210px]">Mijoz ismi</th>
            <th className="w-[150px]">Mahsulot</th>
            <th className="w-[200px]">Shu oygacha qarz</th>
            <th className="w-[200px]">Nechinchi to'lov</th>
            <th className="w-[100px]">Sana</th>
            <th className="w-[100px]">Delete</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase: any, id) => {
            return (
              <tr
                key={id}
                className="h-[50px] cursor-pointer border border-black"
              >
                <td
                  onClick={() => {
                    navigate(`/purchases/${purchase.id}`);
                    localStorage.setItem("onePurchase", purchase.id);
                  }}
                >
                  {purchase.id}
                </td>
                <td
                  onClick={() => {
                    navigate(`/purchases/${purchase.id}`);
                    localStorage.setItem("onePurchase", purchase.id);
                  }}
                >
                  {null}
                </td>
                <td
                  onClick={() => {
                    navigate(`/purchases/${purchase.id}`);
                    localStorage.setItem("onePurchase", purchase.id);
                  }}
                >
                  {purchase.product_name}
                </td>
                <td
                  onClick={() => {
                    navigate(`/purchases/${purchase.id}`);
                    localStorage.setItem("onePurchase", purchase.id);
                  }}
                >
                  {purchase.current_debt} so'm
                </td>
                <td
                  onClick={() => {
                    navigate(`/purchases/${purchase.id}`);
                    localStorage.setItem("onePurchase", purchase.id);
                  }}
                >
                  {purchase.staff}
                </td>
                <td
                  onClick={() => {
                    navigate(`/purchases/${purchase.id}`);
                    localStorage.setItem("onePurchase", purchase.id);
                  }}
                >
                  {purchase.created_date}
                </td>
                <td>
                  <Button
                    onClick={() => deletPurchase(purchase.id)}
                    variant="contained"
                    color="error"
                  >
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export default PurchaseList;
