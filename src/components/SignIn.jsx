import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>
        <form onSubmit={submitHandler}>
          <label className="block text-lg font-medium mb-2">Email</label>
          <input
            className="bg-gray-200 border rounded w-full mb-4 px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email@example.com"
          />

          <label className="block text-lg font-medium mb-2">Password</label>
          <input
            className="bg-gray-200 border rounded w-full mb-4 px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />

          <button className="w-full rounded bg-black text-white font-bold px-3 py-2 hover:bg-gray-800 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          New here?{" "}
          <Link to="/signup" className="text-blue-500">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
