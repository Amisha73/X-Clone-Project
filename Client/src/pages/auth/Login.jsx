import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import LogoSvg from "../../components/svg/logo";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

          {/* Apple Sign-in Button */}
          <button className="flex items-center justify-center w-full py-3 bg-black border border-gray-500 text-gray-300 rounded-full text-lg hover:bg-gray-700 transition">
            <FaApple className="mr-2" />
            Sign in with Apple
          </button>

          {/* Divider with "or" text */}
          <div className="flex items-center justify-between w-full text-gray-500 my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-4">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>

                <input
                  type="text"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
                  placeholder="UserName"
                  name="username"
                  onChange={handleInputChange}
                  value={formData.username}
                />


                <input
                  type="password"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
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


