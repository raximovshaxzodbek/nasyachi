import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
import MenuBar from "../../components/MenuBar";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";
import Loading from "../../components/Loading";
export interface PurchaseType {
  id: Number;
  base_price: Number;
  completed: Boolean;
  created_date: String;
  current_debt: Number;
  customer: Number;
  final_payment_date: null | Number | String;
  first_payment: Number;
  interval_dates: String;
  next_payment_date: Number;
  product_category: Number;
  product_cost: Number;
  product_name: String;
  purchase_description: String;
  staff: Number;
}

const OnePurchase = () => {
  const [purchase, setPurchase] = useState<PurchaseType | any>(null);
  const [payments, setPayments] = useState<any>(null);
  const [purchaseLoading, setPurchaseLoading] = useState<Boolean>(false);
  const [paymentsLoading, setPaymentsLoading] = useState<Boolean>(false);
  useEffect(() => {
    const getPurchase = async () => {
      const purchase = await Axios.get(
        `/purchases/${localStorage.getItem("onePurchase")}/`,
        {
          headers,
        }
      );
      setPurchase(purchase.data);
      setPurchaseLoading(true);
    };
    getPurchase();
    const getPayments = async () => {
      const payments = await Axios.get(
        `/purchases/${localStorage.getItem("onePurchase")}/payments/`,
        {
          headers,
        }
      );
      setPayments(payments.data);
      setPaymentsLoading(true);
    };
    getPayments();
  }, []);
  return (
    <Box>
      <Navbar />
      <Box className={"flex w-full items-center justify-between"}>
        <MenuBar />
        <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
          {purchaseLoading ? (
            <Box className="flex w-[80%] flex-wrap gap-3">
              <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">Product ID</h2>
                <p>{purchase.id}</p>
              </Box>
              <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">Product Name</h2>
                <p>{purchase.product_name}</p>
              </Box>
              <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">Product Client</h2>
                <p>Customer</p>
              </Box>
              <Box className="w-[200px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">Telefon Asl Narxi</h2>
                <p>{purchase.product_cost}so'm</p>
              </Box>
              <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">Nasya narxi</h2>
                <p>{purchase.base_price}so'm</p>
              </Box>
              <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">Dastlabki to'lov</h2>
                <p>{purchase.first_payment}so'm</p>
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
                  {purchase.interval_dates ??
                    purchase.interval_dates.split(",")[0]}
                </p>
              </Box>
              <Box className="w-2400px] rounded-lg p-4 shadow-lg shadow-gray-400">
                <h2 className="text-lg font-semibold">To'lov sanasi 2</h2>
                <p>
                  {purchase.interval_dates ??
                    purchase.interval_dates.split(",")[1]}
                </p>
              </Box>
            </Box>
          ) : (
            <Loading type={"spinningBubbles"} color={"black"} />
          )}
          {paymentsLoading ? (
            <>
              {payments.length > 0 ? (
                <Box className="w-[80%]">
                  <table className="my-5 min-h-[100px] w-full rounded-lg bg-gray-400/40 text-center">
                    <caption className="my-2 w-[200px] rounded-xl bg-gray-300 px-3 py-2 text-2xl font-bold">
                      To'lov tarixi
                    </caption>
                    <thead>
                      <tr className="h-[40px] border border-black">
                        <th>Sana</th>
                        <th>Summasi</th>
                        <th>Nechinchi to'lov</th>
                        <th>Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment: any, id: any) => (
                        <tr className="border border-black" key={payment.id}>
                          <td>
                            {new Date(payment.date).getFullYear()}.
                            {new Date(payment.date).getMonth() > 9
                              ? new Date(payment.date).getMonth()
                              : "0" + new Date(payment.date).getMonth()}
                            .
                            {new Date(payment.date).getDate() > 9
                              ? new Date(payment.date).getDate()
                              : "0" + new Date(payment.date).getDate()}
                          </td>
                          <td>{payment.money}so'm</td>
                          <td>{id + 1} - to'lov</td>
                          <td className="w-[300px]">{payment.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              ) : (
                <h2 className="text-2xl font-semibold text-red-500">
                  To'lov tarixi mavjud emas!!!
                </h2>
              )}
            </>
          ) : (
            <Loading type={"spinningBubbles"} color={"black"} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default OnePurchase;
