import { ChangeEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Box, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeCategoryPortal } from "../../app/portal.slice";
import { Axios } from "../../api/Axios";
import { headers } from "./headers";
const CategoryPortal = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const inputFileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    setImageFile(selectedFile);
  }

  const getCategory = async () => {
    if (name && description && imageFile) {
      dispatch(removeCategoryPortal());
      const category = await Axios.post(
        "/category/",
        {
          name,
          description,
          photo: null,
        },
        { headers }
      );
      console.log(imageFile);
    } else {
      alert("To'ldirilmagan ma'lumot mavjud!");
    }
  };

  return ReactDOM.createPortal(
    <Box
      className={
        "fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/50"
      }
    >
      <Box
        className={
          "relative flex min-h-[500px] w-[500px] flex-col items-center justify-center rounded-xl bg-white p-4 shadow-xl shadow-gray-400"
        }
      >
        <Box
          className="roundxl absolute right-4 top-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-red-500 text-xl text-white duration-300 hover:shadow-lg hover:shadow-red-300 active:bg-red-700"
          onClick={() => {
            dispatch(removeCategoryPortal());
          }}
        >
          <CloseIcon fontSize={"medium"} />
        </Box>
        <form
          className="flex w-[80%] flex-col gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            label="Name"
            onChange={(event) => setName(event.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Description"
            rows={4}
            multiline
            onChange={(event) => setDescription(event.target.value)}
            variant="outlined"
          />
          <Button
            onClick={() => inputFileRef.current?.click()}
            variant="outlined"
            color={"info"}
          >
            Rasm qo'shish
          </Button>
          <input
            ref={inputFileRef}
            type={"file"}
            onChange={handleFileChange}
            className={"hidden"}
          />
          <Button
            fullWidth
            type={"submit"}
            variant="contained"
            onClick={getCategory}
          >
            Add Client
          </Button>
        </form>
      </Box>
    </Box>,
    document.getElementById("new-category") as HTMLElement
  );
};

export default CategoryPortal;
