

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";


const Register = () => {
      const {createUser, updateUserProfile, signInGoogle, signInGitHub} = useContext(AuthContext);
      
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from.pathname || "/";


    const handleRegister=(event)=>{
      event.preventDefault();
      const form= event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);
      createUser(email, password)
      .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(name)
            .then(()=>{

              saveUser(result.user)
                  toast.success('user create successfully')
                  // save user

                 
                  navigate('/login')
            })
      })
      .catch(err=>{
            toast.error(err.message)
      })
      .catch(err=> console.log(err))
    }

    
  const handleGoogleSignUp=()=>{
      signInGoogle()
      .then(result=>{
        console.log(result.user);
        saveUser(result.user)
        navigate(from, {replace: true})
      })
      .catch(err=>{
        toast.error(err.message)
      })
  }

  // Google signIn
  const handleGitHubSignIn = () => {
      signInGitHub()
        .then((result) => {
          console.log(result.user);
          saveUser(result.user)
          navigate(from, { replace: true });
          toast.success('login successfully')
         
        })
        .catch((err) => {
          toast.error(err.message);
        });
    };
  




      return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                  <Helmet>
                        <title>Register | CollegeBookr</title>
                  </Helmet>
            <form onSubmit={handleRegister} className="w-96 p-8 bg-white rounded shadow">
              <h2 className="text-2xl font-bold mb-4">Register</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  
                  className="w-full border rounded px-3 py-2"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                 
                  className="w-full border rounded px-3 py-2"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <input
                  type="password"
                 
                  className="w-full border rounded px-3 py-2"
                  name="password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#33a688] text-white font-semibold py-2 rounded"
              >
                Register
              </button>
              <h1 className="text-center">
                Already have an account?{" "}
                <span>
                  <Link to="/login">Go to login</Link>
                </span>
              </h1>
              <div className="divider">OR</div>
              <div className="text-center">
                {" "}
                <button onClick={handleGoogleSignUp}>
                  <FaGoogle></FaGoogle>
                </button>
                <button onClick={handleGitHubSignIn} className='ms-2'>
                  <FaGithub></FaGithub>
                </button>
              </div>
            </form>
          </div>
      );
};

export default Register;