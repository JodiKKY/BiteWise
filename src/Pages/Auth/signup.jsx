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

  // Handle Google Sign-up
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Info:", result.user);
        setMessage("Google signup successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Google signup:", error);
        setMessage("Google signup failed.");
      });
  };

  return (
    <section className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl flex max-w-4xl p-6 md:p-10 items-center">
        <div className="md:w-1/2 px-6">
          <h2 className="font-bold text-3xl text-gray-800 text-center font-serif">
            Sign Up
          </h2>
          <p className="text-sm mt-4 text-gray-600 text-center">
            Create an account to get started.
          </p>

          {message && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
            <div>
              <input
                className="p-3 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInput}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div>
              <input
                className="p-3 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                type="text"
                name="firstName"
                placeholder="First Name"
                autoComplete="off"
                onChange={handleInput}
              />
              {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            </div>

            <div>
              <input
                className="p-3 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                type="text"
                name="lastName"
                placeholder="Last Name"
                autoComplete="off"
                onChange={handleInput}
              />
              {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
            </div>

            <div className="relative">
              <input
                className="p-3 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>

            <button
              className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 duration-300 hover:bg-orange-400 shadow-md"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="mt-6 items-center text-gray-600">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignUp}
            className="bg-white border py-3 w-full rounded-lg mt-5 flex justify-center items-center text-sm font-medium shadow-md hover:scale-105 duration-300 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Register with Google
          </button>

          <div className="mt-6 text-sm text-gray-600 text-center">
            Already have an account? <Link to="/login" className="text-orange-500 hover:underline">Login</Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img className="rounded-2xl max-h-[500px]" src={Image} alt="Signup illustration" />
        </div>
      </div>
    </section>
  );
}

export default Signup;