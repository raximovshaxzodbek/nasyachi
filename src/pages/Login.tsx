import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        className="flex h-[300px] w-[400px] max-w-[95%] flex-col items-center justify-center gap-3 rounded-lg border p-3 shadow-lg shadow-gray-400"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2 className="text-center text-3xl font-semibold">Login</h2>
        <input
          type="text"
          placeholder="Login"
          className="w-[300px] rounded-xl bg-gray-200 px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[300px] rounded-xl bg-gray-200 px-3 py-2"
        />
        <Link
          to={"/dashboard"}
          type="submit"
          className="w-[300px] cursor-pointer rounded-xl bg-blue-500 px-3 py-2 text-center text-white"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;
