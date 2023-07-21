// src/components/Login.js
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (e.g., API call, validation, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-[#33a688] text-white font-semibold py-2 rounded"
          onClick={handleLogin}
        >
          Log in
        </button>
        <h1 className='text-center'>Are you new? <span><Link to='/register'>Go to register</Link></span></h1>
        <div className="divider">OR</div>
       <div className='text-center'> <button><FaGoogle></FaGoogle></button></div>
      </div>
    </div>
  );
};

export default Login;
