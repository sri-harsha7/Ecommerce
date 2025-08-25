import React from "react";
import { useState } from "react";

const Login = () => {
  const [islogin, setIsLogin] = useState("Login");
  return (
    <div className="min-h-[42vh] flex justify-center items-center text-xl mx-auto w-[400px] ">
      <form
        action=""
        className="flex flex-col gap-2 justify-between items-center w-full p-3 h-[300px] "
      >
        <h1 className="text-3xl font-bold bg-blue-300 w-full text-center py-2">
          {islogin}
        </h1>

        {islogin == "Sign Up" && (
          <div className="flex flex-col w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="my-2 p-1 outline text-lg"
            />
          </div>
        )}

        <div className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="my-2 p-1 outline-1 text-lg"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="my-2 p-1 outline-1 text-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-[#47579E] text-white p-2 w-full mt-5"
        >
          Login
        </button>
        {islogin == "Login" && (
          <p className="text-center mt-3">
            Don't have an account &nbsp;
            <span
              className="text-blue-600"
              onClick={() => setIsLogin("Sign Up")}
            >
              Signup
            </span>
          </p>
        )}
        {islogin == "Sign Up" && (
          <p className="text-center mt-3">
            Already have an account &nbsp;
            <span className="text-blue-600" onClick={() => setIsLogin("Login")}>
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
