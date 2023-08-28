import React from "react";
import { useState } from "react";
import imgLogin from "../assets/image_auth.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import Navbar from "../components/Navbar";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


 
  // function handlesubmit for connexion
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setError("");
      setLoading(true);

      const configuration = {
        method: "post",
        url: "https://auth-api-adk2.onrender.com/login",
        data: {
          email,
          password,
        },
      };

      axios(configuration)
        .then((result) => {
          console.log(result);
          setLoading(false);
          cookies.set("TOKEN", result.data.token, {
            path: "/",
          });

          setEmail("");
          setPassword("");
          setLogin(true);
          setError2("");

          window.location.href = "/dashboard";
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);

          if (error.response && error.response.status === 404) {
            setError2("Email ou mot de passe incorrect");
          } else {
            setError2("Une erreur s'est produite. Vérifier vos informations");
          }
        });
    } else {
      setError("Veuillez remplir tous les champs");
    }
  };
  // function handleGoogleLogin for google connexion
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post(
        "https://auth-api-adk2.onrender.com/auth/google"
      );
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error("Failed to initiate Google login:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between p-4 sm:mx-auto max-w-screen-xl mt-44 lg:mt-10">
        <div className="md:w-1/2 w-full ">
          <h1 className=" text-4xl font-bold text-center mb-5">Connexion</h1>
          {/* Formulaire of login */}
          <form onSubmit={(e) => handleSubmit(e)}>
            {/*Input E-mail*/}
            <input
              className="text-sm w-full px-4 py-4 border border-gray-300 rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
            {/*Input Mots de passe*/}
            <div className="relative container">
              <input
                className=" my-4 text-sm w-full px-4 py-4 border border-gray-300 rounded-lg "
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                required
                name="password"
                id="passwordlogin"
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

            <div className=" mb-2 flex justify-end font-semibold text-sm">
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="/forgetpassword"
              >
                Mot de passe oublié?
              </a>
            </div>
            {error && <p className="text-red-600 text-center my-2">{error}</p>}
            {error2 && <p className="text-red-600 text-center">{error2}</p>}

            {/*Boutton conexion*/}
            <div className=" flex justify-center">
              <button
                className=" my-4 bg-[#2546BE] hover:bg-blue-900 w-full h-10 md:w-80 px-4 py-2 text-white rounded-md tracking-wider flex justify-center items-center font-bold text-sm"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Connexion
                {loading && (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className=" mx-3 w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </div>
            {login ? (
              <p className=" text-green-600 text-center">
                Vous êtes connecté avec succès
              </p>
            ) : (
              <p className=" text-red-600 text-center"></p>
            )}
          </form>

          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-center">
            Vous n'avez pas de compte ?
            <Link
              to="/register"
              className=" mx-2 text-[#4299E1] hover:underline hover:underline-offset-4"
            >
              Inscrivez-vous
            </Link>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Où se connecter avec
            </p>
          </div>

          {/*Boutton google*/}
          <div className="my-6 space-y-2 bg-[#F2FAFB] ">
            <button
              aria-label="Se connecter avec Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-blue-400"
              onClick={handleGoogleLogin}
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

              <p className=" text-[#4D9FE2] ">Se connecter avec Google</p>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 p-16 ">
          <img
            src={imgLogin}
            alt="imgLogin"
            className="w-auto hidden md:block "
          />
        </div>
      </div>
    </>
  );
}

export default Login;
