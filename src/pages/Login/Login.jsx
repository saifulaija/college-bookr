// src/components/Login.js

import { useContext, useRef, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { logIn, signInGoogle, resetPassword, signInGitHub } = useContext(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("login successfully");
        navigate('/')
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Google signIn
  const handleGitHubSignIn = () => {
    signInGitHub()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success('login successfully')
       
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // GitHub signIn
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
       
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // handle reset password

  const handleResetPassword = () => {
    const email = emailRef.current.value

    resetPassword(email)
    .then(()=>{
      toast.success('Please check your email for reset link')
    })
    .catch(err=>{
      toast.error(err.message)
    })
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="w-96 p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="w-full border rounded px-3 py-2"
            name="email"
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
            name="password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#33a688] text-white font-semibold py-2 rounded"
        >
          Login
        </button>
        <div>
        <button
          onClick={handleResetPassword}
          className="text-sm hover:underline hover:text-[#33a688]"
        >
          Forget password
        </button>

        <h1 className="text-sm">
          Are you new?{" "}
          <span>
            <Link to="/register" className="text-sm hover:underline">
              Go to register
            </Link>
          </span>
        </h1>
        <div className="divider">OR</div>
        <div className="text-center">
          {" "}
          <button onClick={handleGoogleSignIn}>
            <FaGoogle></FaGoogle>
          </button>
          <button onClick={handleGitHubSignIn} className="ms-2">
            <FaGithub></FaGithub>
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
