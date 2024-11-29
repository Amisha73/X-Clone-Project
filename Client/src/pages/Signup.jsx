import React, { useState } from "react";
import LogoSvg from "./logo";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    // signup
    //  try {
    //   const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
    //     headers: {
    //       'Content-Type': "application/json"
    //     },
    //     withCredentials: true
    //   });
    //   if(res.data.success){
    //     setIsLogin(true);
    //     toast.success(res.data.message);
    //   }
    // } catch (error) {
    //   toast.success(error.response.data.message);
    //   console.log(error);
    // }
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center text-white">
      {/* Logo Section (for larger screens) */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <LogoSvg className="w-72 fill-white" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-6 lg:px-0">
        {/* Heading Section */}
        <h1 className="text-5xl font-extrabold text-center lg:text-left text-white mb-6">
          Happening now
        </h1>
        <p className="text-3xl font-bold text-center lg:text-left text-white mb-8">
          Join today.
        </p>

        {/* Form Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs lg:w-80">
          {/* Create Account form */}
          <form className="flex gap-4 flex-col" onSubmit={submitHandler}>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
              placeholder="UserName"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-80 p-3 "
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-2 bg-blue-500 text-white rounded-full">
              Login
            </button>
          </form>

          {/* Terms of Service and Privacy Policy */}
          <p className="text-sm text-center text-gray-400 mt-2">
            By signing up, you agree to the{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Footer Section */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white hover:text-blue-500 font-semibold rounded-full"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
