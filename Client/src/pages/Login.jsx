import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import LogoSvg from "./logo";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import getUser from "../redux/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    // login
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(getUser(res?.data?.user));
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className=" flex h-screen bg-black">
      <div className="flex-1 hidden lg:flex items-center  justify-center">
        <LogoSvg className=" fill-white w-72" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-6 lg:px-0">
        {/* Heading Section */}
        <h1 className="text-5xl font-extrabold text-center lg:text-left text-white mb-10">
          Welcome Back!!
        </h1>

        {/* Form Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs lg:w-80">
          {/* Google Sign-in Button */}
          <button className="flex items-center justify-center w-full py-3 bg-white text-black rounded-full text-lg hover:bg-gray-100 transition">
            <FcGoogle className="mr-2" />
            Sign in with Google
          </button>

          {/* Divider with "or" text */}
          <div className="flex items-center justify-between w-full text-gray-500 my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-4">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <form className="flex gap-4 flex-col" onSubmit={submitHandler}>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button className="w-full py-2 bg-blue-500 text-white rounded-full">
                Login
              </button>
            </form>

            <p className="text-center text-gray-400 mt-6">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-white hover:text-blue-500 font-semibold rounded-full"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
