import ReactDOM from "react-dom";
import { Box, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removePurchasePortal } from "../../app/portal.slice";
import { useEffect, useState } from "react";
import { CustomerType } from "../pages/Purchase/PurchaseList";
import { Axios } from "../../api/Axios";
import { headers } from "./headers";
const PurchasePortal = () => {
  const [customers, setCustomers] = useState([] as CustomerType[]);
  const [categorys, setCategorys] = useState([] as any[]);
  const [customer, setCustomer] = useState<string>("");
  const [customerID, setCustomerID] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [product_category, setCategoryID] = useState<string>("");

  const [product_name, setProduct_name] = useState<string>("");
  const [nasiya_cost, setNasiya_cost] = useState<string>("");
  const [originl_price, setOriginl_price] = useState<string>("");
  const [first_payment, setFirst_payment] = useState<string>("");
  const [base_price, setBase_price] = useState<string>("");
  const [interval_dates, setIterval_dates] = useState<string>("");
  const [purchase_description, setPurchase_description] = useState<string>("");

  const postPurchase = async () => {
    if (
      product_name &&
      nasiya_cost &&
      originl_price &&
      first_payment &&
      base_price &&
      interval_dates &&
      purchase_description &&
      product_category &&
      customerID
    ) {
      await Axios.post(
        "/purchases/",
        {
          customer: customerID,
          created_date: formattedDate,
          product_category,
          product_name,
          nasiya_cost,
          originl_price,
          first_payment,
          base_price,
          interval_dates,
          purchase_description,
          completed: false,
        },
        { headers }
      );
      dispatch(removePurchasePortal());
    } else {
      alert("To'ldirilmagan qatorlar mavjud!!!");
    }
  };
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}T${now
    .getHours()
    .toString()
    .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}${now.getTimezoneOffset() > 0 ? "-" : "+"}${(
    Math.abs(now.getTimezoneOffset()) / 60
  )
    .toString()
    .padStart(2, "0")}:${(Math.abs(now.getTimezoneOffset()) % 60)
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    const getCustomers = async (url: string) => {
      const customers = await Axios.get(url, { headers });
      setCustomers(customers.data);
    };
    getCustomers("/customer/");
    const getCategorys = async (url: string) => {
      const customers = await Axios.get(url, { headers });
      setCategorys(customers.data);
    };
    getCategorys("/category/");

    customers.filter((item: any) => {
      if (item.name === customer) {
        setCustomerID(item.id);
      }
    });
    categorys.filter((item: any) => {
      if (item.name === category) {
        setCategoryID(item.id);
      }
    });
  }, [customers]);

  const handleCustomer = (event: SelectChangeEvent) => {
    setCustomer(event.target.value as string);
  };

  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <Box
      className={
        "fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/50"
      }
    >
      <Box
        className={
          "relative flex max-h-[90vh] min-h-[500px] w-[600px] flex-col items-center justify-start overflow-auto rounded-xl bg-white p-4 shadow-xl shadow-gray-400"
        }
      >
        <Box
          className="roundxl absolute right-4 top-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-red-500 py-3 text-xl text-white duration-300 hover:shadow-lg hover:shadow-red-300 active:bg-red-700"
          onClick={() => {
            dispatch(removePurchasePortal());
          }}
        >
          <CloseIcon fontSize={"medium"} />
        </Box>
        <h2 className="mb-3 text-3xl font-semibold">New Purchase</h2>
        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <Box className={"flex justify-center gap-3"}>
            <TextField
              label="Maxsulot Nomi"
              fullWidth
              variant="outlined"
              onChange={(event) => setProduct_name(event.target.value)}
            />
            <FormControl className="w-[200px]" fullWidth>
              <InputLabel id="demo-simple-select-label">Customer</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customer}
                label="Customer"
                className="capitalize"
                onChange={handleCustomer}
              >
                {customers.map((item: any) => {
                  return (
                    <MenuItem
                      value={item.name}
                      key={item.id}
                      className="capitalize"
                    >
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box className={"flex justify-between gap-3"}>
            <TextField
              label="Nasiya Narxi"
              onChange={(event) => setNasiya_cost(event.target.value)}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Asl Narxi"
              onChange={(event) => setOriginl_price(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box className={"flex justify-between gap-3"}>
            <TextField
              label="Dastlabki to'lov"
              onChange={(event) => setFirst_payment(event.target.value)}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Har Oylik to'lov narxi"
              fullWidth
              variant="outlined"
              onChange={(event) => setBase_price(event.target.value)}
            />
          </Box>
          <Box className={"flex justify-between gap-3"}>
            <TextField
              label="To'lov sanalari"
              onChange={(event) => setIterval_dates(event.target.value)}
              fullWidth
              variant="outlined"
            />
            <FormControl className="w-[200px]" fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                className="capitalize"
                onChange={handleCategory}
              >
                {categorys.map((item: any) => {
                  return (
                    <MenuItem
                      value={item.name}
                      key={item.id}
                      className="capitalize"
                    >
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box className={"flex justify-center"}>
            <TextField
              className="w-full"
              label="Comment"
              multiline
              rows={4}
              variant="outlined"
              onChange={(event) => setPurchase_description(event.target.value)}
            />
          </Box>
          <Button type={"submit"} variant="contained" onClick={postPurchase}>
            Add Purchase
          </Button>
        </form>
      </Box>
    </Box>,
    document.getElementById("new-purchase") as HTMLElement
  );
};

export default PurchasePortal;
