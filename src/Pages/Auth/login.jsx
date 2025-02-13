import React, { useState } from 'react';
import Image from "/src/assets/1.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider, signInWithEmailAndPassword, signInWithPopup } from "../../firebase"; 
import Validation from './LoginValidation';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = Validation(values);
    setErrors(formErrors);

    if (!formErrors.email && !formErrors.password) {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          console.log("Logged in as:", userCredential.user.email);
          localStorage.setItem("isLoggedIn",true)
          navigate('/');
        })
        .catch((error) => {
          console.error("Error during login:", error.message);
          setErrors({ general: "Login failed. Please check your credentials." });
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google login successful:", result.user);
        localStorage.setItem("isLoggedIn",true)
        navigate('/');
      })
      .catch((error) => {
        console.error("Error with Google login:", error.message);
      });
  };

  return (
    <section className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl flex max-w-4xl p-6 md:p-10 items-center">
        <div className="md:w-1/2 px-6">
          <h2 className="font-bold text-3xl text-gray-800 text-center font-serif">Login</h2>
          <p className="text-sm mt-4 text-gray-600 text-center">Welcome back! Please login to continue.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
            <div>
              <input
                className="p-3 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleInput}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div className="relative">
              <input
                className="p-3 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleInput}
              />
              <svg
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
              </svg>
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>

            <button
              className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 duration-300 hover:bg-orange-400 shadow-md"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="mt-6 items-center text-gray-600">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </div>

          <button 
            onClick={handleGoogleSignIn}
            className="bg-white border py-3 w-full rounded-lg mt-5 flex justify-center items-center text-sm font-medium shadow-md hover:scale-105 duration-300 hover:bg-gray-100"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Icon" className="w-5 h-5 mr-2"/>
            Login with Google
          </button>

          <div className="mt-6 text-sm text-gray-600 text-center">
            <Link to="/forgot-password" className="hover:underline">Forgot password?</Link>
          </div>

          <div className="mt-4 text-sm flex justify-center items-center">
            <p className="mr-2">New to BiteWise?</p>
            <Link to="/signup">
              <button className="bg-orange-500 text-white py-2 px-5 rounded-lg hover:scale-105 duration-300 hover:bg-orange-400 shadow-md">
                Register
              </button>
            </Link>
          </div>

          {/* Restaurant Owner Login */}
          <div className="mt-4 text-sm flex justify-end">
            <Link to="/OwnerLogin" className="text-orange-500 hover:underline">
              Restaurant Owner? Login here
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img className="rounded-2xl max-h-[500px]" src={Image} alt="Login illustration" />
        </div>
      </div>
    </section>
  );
}

export default Login;
