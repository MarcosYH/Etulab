import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Registers.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Forgetpassword() {
 
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  const isEmailValid = (email) => {
    // Expression régulière pour valider l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (!isEmailValid(email)) {
        // L'adresse e-mail n'est pas valide, afficher une erreur
        setEmailError("Veuillez entrer une adresse e-mail valide");
        return;
      }
      setLoading(true);

       // Effectuer les actions nécessaires (envoi des données, etc.)
       const configuration = {
        method: "post",
        url: "https://auth-api-adk2.onrender.com/forgotpassword",
        data: {
          email,
        },
      };
      axios(configuration)
        .then((result) => {
          setLoading(false);
          window.location.href = "/check_email";
          console.log(result);
          setEmail("");
          setEmailError("");
          cookies.set("EMAIL", email, { path: "/" });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          if (error.response.status === 404) {
            setEmailError("Veuillez entrer le mail relié à votre compte");
          } 
            });
       };
  return (
    <>
      <div>
        <div className=" h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="w-full px-6 py-4 mt-6 overflow-hidden sm:max-w-lg sm:rounded-lg">
            {/*  Formulaire de mots de passe oublié */}
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="text-3xl text-center font-bold text-black">
              Mot de passe oublié?
              </h1>
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
                  {emailError && (
                    <p className="text-red-600 text-center">{emailError}</p>
                  )}
                </div>
              </div>
              {/* button register */}
              <div className="flex items-center justify-center my-8">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-900 flex justify-center items-center font-bold text-sm"
                  onClick={(e) => handleSubmit(e)}
                >
                 Envoyer
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
            </form>
            <div className="mt-4 text-grey-600 text-center">
              Vous avez déjà un compte ?{" "}
              <span>
                <Link className="text-blue-600 hover:underline" to="/login">
                  Se connecter
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgetpassword;
