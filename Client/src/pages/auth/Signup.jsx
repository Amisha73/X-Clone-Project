import React, {useState} from "react";
import LogoSvg from "../../components/svg/logo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-black h-screen flex items-center justify-center text-white">
      {/* Logo Section (for larger screens) */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <LogoSvg className="w-72 fill-white" />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-6 lg:px-0">
        {/* Heading Section */}
        <h1 className="text-5xl font-extrabold text-center lg:text-left text-white mb-6">Happening now</h1>
        <p className="text-3xl font-bold text-center lg:text-left text-white mb-8">Join today.</p>

        {/* Form Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs lg:w-80">
          {/* Google Sign-in Button */}
          <button className="flex items-center justify-center w-full py-3 bg-white text-black rounded-full text-lg hover:bg-gray-100 transition">
            <FcGoogle className="mr-2" />
            Sign up with Google
          </button>

          {/* Apple Sign-in Button */}
          <button className="flex items-center justify-center w-full py-3 bg-black border border-gray-500 text-gray-300 rounded-full text-lg hover:bg-gray-700 transition">
            <FaApple className="mr-2" />
            Sign up with Apple
          </button>

          {/* Divider with "or" text */}
          <div className="flex items-center justify-between w-full text-gray-500 my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-4">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Create Account Button */}
          <button
          className="w-full py-2 bg-blue-500 text-white rounded-full"
          onClick={openModal}
        >
          Create account
        </button>
          	  

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

         {/* modal */}
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 text-black relative">
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Signup;
