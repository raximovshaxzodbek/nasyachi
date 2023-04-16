import ReactDOM from "react-dom";
import { Box, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeClientPortal } from "../../app/portal.slice";
import { useState } from "react";
import { Axios } from "../../api/Axios";
import { headers } from "./headers";
const ClientPortal = () => {
  const [name, setName] = useState<String>("");
  const [phone_num, setPhone_num] = useState<String>("");
  const [passport_num, setPassport_num] = useState<String>("");
  const dispatch = useDispatch();
  const handeNewClient = async () => {
    dispatch(removeClientPortal());
    await Axios.post(
      "/customer/",
      {
        name,
        passport_num,
        phone_num,
      },
      { headers }
    );
    setName("");
    setPhone_num("");
    setPassport_num("");
  };
  return ReactDOM.createPortal(
    <Box
      className={
        "fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/50"
      }
    >
      <Box
        className={
          "relative flex min-h-[500px] w-[400px] flex-col items-center justify-center rounded-xl bg-white p-4 shadow-xl shadow-gray-400"
        }
      >
        <Box
          className="roundxl absolute right-4 top-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-red-500 text-xl text-white duration-300 hover:shadow-lg hover:shadow-red-300 active:bg-red-700"
          onClick={() => {
            dispatch(removeClientPortal());
          }}
        >
          <CloseIcon fontSize={"medium"} />
        </Box>
        <h2 className="mb-3 text-3xl font-semibold">New Client</h2>
        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            variant="outlined"
          />
          <TextField
            label="Pasport Seriya"
            value={passport_num}
            onChange={(event) => {
              setPassport_num(event.target.value);
            }}
            variant="outlined"
          />
          <TextField
            label="Contact"
            value={phone_num}
            onChange={(event) => {
              setPhone_num(event.target.value);
            }}
            variant="outlined"
          />
          <Button type={"submit"} variant="contained" onClick={handeNewClient}>
            Add Client
          </Button>
        </form>
      </Box>
    </Box>,
    document.getElementById("new-client") as HTMLElement
  );
};

export default ClientPortal;
