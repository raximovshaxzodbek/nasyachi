import { useState, useEffect } from "react";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export interface CustomerType {
  id: any;
  name: String;
  passport_num: String;
  phone_num: String;
}
const ClientsList = () => {
  const [customers, setCustomers] = useState([] as CustomerType[]);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getCustomers = async (url: string) => {
      const customers = await Axios.get(url, { headers });
      setCustomers(customers.data);
    };
    getCustomers("/customer/");
    setLoading(true);
  }, [customers]);

  const deletClient = async (id: string) => {
    navigate("/clients");
    if (confirm("Rostan ham bu mijozni o'chirishni istaysizmi?")) {
      Axios.delete(`/customer/${id}/`, { headers });
    }
  };

  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      {loading ? (
        <table className="w-[98%] border border-black text-center">
          <thead>
            <tr className="h-[50px] border border-black">
              <th>Ismi</th>
              <th>Pasport Seriya</th>
              <th>Contact</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                className="h-[50px] cursor-pointer border border-black"
                key={customer.id}
              >
                <td
                  onClick={() => {
                    navigate(`/clients/${customer.id}`);
                    localStorage.setItem(
                      "client",
                      JSON.stringify({ id: customer.id, name: customer.name })
                    );
                  }}
                  className="capitalize"
                >
                  {customer.name}
                </td>
                <td
                  onClick={() => {
                    navigate(`/clients/${customer.id}`);
                    localStorage.setItem(
                      "client",
                      JSON.stringify({ id: customer.id, name: customer.name })
                    );
                  }}
                >
                  {customer.passport_num}
                </td>
                <td
                  onClick={() => {
                    navigate(`/clients/${customer.id}`);
                    localStorage.setItem(
                      "client",
                      JSON.stringify({ id: customer.id, name: customer.name })
                    );
                  }}
                >
                  {customer.phone_num}
                </td>
                <td>
                  <Button
                    onClick={() => deletClient(customer.id)}
                    variant="contained"
                    color="error"
                  >
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading type="spinningBubbles" color="black" />
      )}
    </Box>
  );
};

export default ClientsList;
