import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img_register from "../assets/image_auth.png";
import "../styles/Registers.css";
import Navbar from "../components/Navbar";
 

function Registers() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
   
  const [email, setEmail] = useState("");
   
  const [passwordVisible, setPasswordVisible] = useState(false);

  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      
        <Navbar/>
        <div className="flex flex-col md:flex-row justify-center items-center my-2 mx-5 mt-44 ">
          <div className="w-full px-6 py-4 mt-6 overflow-hidden sm:max-w-lg sm:rounded-lg">
            {/* Formulaire d'inscription */}
            {/* onSubmit={(e) => handleSubmit(e)} */}
            <form>
              <h1 className="text-3xl text-center font-bold text-black">
              Rejoignez-nous !
              </h1>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined my-2"
                >
                  Nom
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="nom"
                    value={name}
                    className="text-sm w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Entrer votre nom"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className=" my-2 block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className=" text-sm w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrer votre Address email "
                    required
                  />
                   
                </div>
              </div>
              {/* Password */}
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className=" my-2 block text-sm font-medium text-gray-700 undefined"
                >
                  Mot de passe
                </label>
                <div className="relative container mx-auto ">
                  <input
                    className=" my-4 text-sm w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-blue-200 focus:border-blue-200 block dark:focus:ring-blue-200 dark:focus:border-blue-200"
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    required
                    name="password"
                    id="passwordregister"
                  />
                  <label
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </label>
                </div>
                 
              </div>
               
              {/* button register */}
              <div className="flex items-center justify-center my-8">
                <button
                  className="w-full bg-[#2546BE] hover:bg-blue-900 px-4 py-2 tracking-wider text-white rounded-md flex justify-center items-center font-bold text-sm"
                  // onClick={(e) => handleSubmit(e)}
                >
                  S'inscrire
                  
                </button>
              </div>

              {/* display success message */}
               
            </form>
            <div className="mt-4 text-grey-600 text-center">
              Vous avez déjà un compte ?{" "}
              <span>
                <Link className="text-[#4299E1] hover:underline hover:underline-offset-4" to="/login">
                  Se connecter
                </Link>
              </span>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 "> Où</p>
              <hr className="w-full" />
            </div>
            <div className="my-6 space-y-2 bg-[#F2FAFB] ">
              <button
                aria-label="Se connecter avec Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                // onClick={handleGoogleLogin}
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#4285F4"
                    d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                  />
                  <path
                    fill="#34A853"
                    d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                  />
                  <path
                    fill="#EA4335"
                    d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                  />
                </svg>

                <p className=" text-[#4D9FE2]">Se connecter avec Google</p>
              </button>
            </div>
          </div>
          <div>
          <img
            src={img_register}
            alt="img_register"
            className="w-auto hidden md:block"
          />
          </div>
        </div>
  
    </>
  );
}

export default Registers;
