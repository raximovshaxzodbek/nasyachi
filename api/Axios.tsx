import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://muhammadyunus.pythonanywhere.com",
  headers: {
    "Content-Type": "application/json",
  },
});
