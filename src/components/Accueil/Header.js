import React from "react";
import "../../styles/styles.css";
import SecureAnimation from "./SecureAnimation";

export default function Header() {
  return (
    <>
    <div className="bg-[#F2F4FE]">
      <div className="flex flex-wrap items-center justify-between p-4 sm:mx-auto max-w-screen-xl mt-24 ">
        <div className="h-[30rem] ">
          <div className=" md:w-1/2 p-4 title_header relative z-10 ">
            <div className=" mb-4">
            <span className=" p-2 bg-white shadow-lg border rounded-xl">👋 Bienvenue à Etulab</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Testez vos connaissances en sécurité Web avec nos environnements
              de test !
            </h1>
            <div className=" border bg-[#34A853] rounded-xl py-1 w-16 mb-4"></div>
            <p className="text-gray-600 text-2xl mr-16">Apprendre, appliquer et tester vos connaissances en sécurité.</p>
            <a
                href=" #"
                type="button"
                className="text-white rounded-lg px-3 py-2 text-center mr-3 md:mr-0 bg-[#2546BE] hover:bg-blue-900 my-5"
              >
               Commencer
              </a>
          </div>
          <div className="fond_header hidden md:block">
            <SecureAnimation />
          </div>
        </div>
 
      </div>
    </div>
    </>
  );
}
