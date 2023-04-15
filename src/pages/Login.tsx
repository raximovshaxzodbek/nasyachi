import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { handlerLogin } from "../../app/login.slice";
const Login = () => {
  const [username, setUsername] = useState<String | any>("");
  const [password, setPassword] = useState<String | any>("");
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const handlerSubmit = () => {
    if (username === "azamjon" && password === "1") {
      dispatch(handlerLogin({ username, password }));
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    1;
  });

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex h-[300px] w-[400px] max-w-[95%] flex-col items-center justify-center gap-3 rounded-lg border p-3 shadow-lg shadow-gray-400"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          className="w-[300px] rounded-xl bg-gray-200 px-3 py-2"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-[300px] rounded-xl bg-gray-200 px-3 py-2"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link
          to={username === "azamjon" && password === "1" ? "/dashboard" : "/"}
          onClick={handlerSubmit}
        >
          <Button
            type="submit"
            variant="contained"
            style={{ borderRadius: "10px" }}
            className="w-[300px] cursor-pointer rounded-xl bg-blue-500 px-3 py-2 text-center text-white"
          >
            {isLoggedIn ? "Loading..." : "Login"}
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
