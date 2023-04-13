import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { handlerLogin } from "../../app/login.slice";
import { RootState } from "../../app/store";
const Login = () => {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoggedIn, username, password } = useSelector(
    (state: RootState) => state.login
  );
  const handlerSubmit = () => {
    if (user && pass) {
      dispatch(handlerLogin({ username:user, password:pass }));
      setUsername("");
      setPassword("");
      console.log(isLoggedIn);
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
          value={user}
          className="w-[300px] rounded-xl bg-gray-200 px-3 py-2"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          className="w-[300px] rounded-xl bg-gray-200 px-3 py-2"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          onClick={handlerSubmit}
          type="submit"
          variant="contained"
          style={{ borderRadius: "10px" }}
          className="w-[300px] cursor-pointer rounded-xl bg-blue-500 px-3 py-2 text-center text-white"
        >
          <Link to={isLoggedIn ? "/dashboard" : "/"}>
            {isLoggedIn ? "Loading..." : "Login"}
          </Link>
        </Button>
      </form>
    </div>
  );
};

export default Login;
