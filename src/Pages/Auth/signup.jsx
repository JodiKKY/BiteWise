import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "/src/assets/1.png";
import Validation from "./SignupValidation";
import axios from "axios";
import { auth, provider } from "/Users/jodikky/Documents/GitHub/BiteWise/src/firebase"; 
import { signInWithPopup } from "firebase/auth";

function Signup() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3000/Signup", values)
        .then((res) => {
          setMessage("Signup successful!");
          navigate("/");
        })
        .catch((err) => {
          setMessage("Signup failed. Please try again.");
          console.error(err);
        });
    }
  };

  // Handle Google Sign-in
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Info:", result.user);
        setMessage("Google signup successful!");
        navigate("/"); // Navigate to home or dashboard
      })
      .catch((error) => {
        console.error("Error during Google signup:", error);
        setMessage("Google signup failed.");
      });
  };

  return (
    <section className="bg-white min-h-screen flex box-border justify-center items-center">
      <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-white text-center font-serif">
            SignUp
          </h2>
          <p className="text-sm mt-4 text-black">Create an account to get started.</p>

          {message && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                className="p-2 rounded-xl border w-full"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInput}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div>
              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="firstName"
                placeholder="First Name"
                autoComplete="off"
                onChange={handleInput}
              />
              {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
            </div>
            <div>
              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="lastName"
                placeholder="Last Name"
                autoComplete="off"
                onChange={handleInput}
              />
              {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
            </div>

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput}
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>

            <button
              className="bg-orange-500 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-orange-400 font-medium"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="mt-6 items-center text-gray-100">
            <hr className="border-black" />
            <p className="text-center text-sm text-black">OR</p>
            <hr className="border-black" />
          </div>

          <button
            onClick={handleGoogleSignUp}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Register with Google
          </button>

          <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
            Already have an account? <Link to="/login" className="text-orange-500">Login</Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl max-h-[1600px]" src={Image} />
        </div>
      </div>
    </section>
  );
}

export default Signup;