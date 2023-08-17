import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div>
        <nav className="bg-white fixed w-full top-0 border-b shadow border-gray-200">
          <div className="flex flex-wrap items-center justify-between p-4 sm:mx-auto max-w-screen-xl">
            {/* Logo-Etulab */}
            <a href=" #">
              <img src={Logo} alt="Logo-Etulab" />
            </a>
            {/* boutton-auth&responsive */}
            <div className="flex md:order-2">
              {/* auth-button */}
              <a
                href=" #"
                type="button"
                className="text-black hover:text-[#2546BE] font-medium rounded-lg px-3 py-2 text-center mr-3 border border-[#2546BE]"
              >
                Connexion
              </a>
              <a
                href=" #"
                type="button"
                className="text-white rounded-lg px-3 py-2 text-center mr-3 md:mr-0 bg-[#2546BE] hover:bg-blue-900"
              >
                S'inscrire
              </a>
              {/* toggle-button */}
              <button
                data-collapse-toggle="navbar-element"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                aria-controls="navbar-element"
                aria-expanded="false"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Link for page */}
            <div
              className={`w-full md:flex justify-self-center pb-3  md:w-auto mt-4 md:pb-0 md:mt-0 md:order-1 ${
                navbar ? "block" : "hidden"
              }`}
              id="navbar-element"
            >
              <ul className="flex flex-col md:p-0 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
                    aria-current="page"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solution"
                    className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
                  >
                    solution
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
