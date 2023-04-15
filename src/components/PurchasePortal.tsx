import ReactDOM from "react-dom";
import { Box, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removePurchasePortal } from "../../app/portal.slice";
const PurchasePortal = () => {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <Box
      className={
        "fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/50"
      }
    >
      <Box
        className={
          "relative flex min-h-[500px] w-[600px] flex-col items-center justify-center rounded-xl bg-white p-4 shadow-xl shadow-gray-400"
        }
      >
        <Box
          className="roundxl absolute right-4 top-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-red-500 text-xl text-white duration-300 hover:shadow-lg hover:shadow-red-300 active:bg-red-700"
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
            <TextField label="Product ID" variant="outlined" />
            <TextField label="Product Name" variant="outlined" />
            <TextField label="Client" variant="outlined" />
          </Box>
          <Box className={"flex justify-center gap-3"}>
            <TextField label="Telefon asl narxi" variant="outlined" />
            <TextField label="Nasiya Narxi" variant="outlined" />
            <TextField label="Dastlabki to'lov" variant="outlined" />
          </Box>
          <Box className={"flex justify-center gap-3"}>
            <TextField label="Nechi oyga" variant="outlined" />
            <TextField label="To'lov turi (USZ/USD)" variant="outlined" />
          </Box>
          <Box className={"flex justify-center gap-3"}>
            <TextField label="To'lov sanasi 1" variant="outlined" />
            <TextField label="To'lov sanasi 2" variant="outlined" />
          </Box>
          <Button
            type={"submit"}
            variant="contained"
            onClick={() => {
              dispatch(removePurchasePortal());
            }}
          >
            Add Purchase
          </Button>
        </form>
      </Box>
    </Box>,
    document.getElementById("new-purchase") as HTMLElement
  );
};

export default PurchasePortal;
