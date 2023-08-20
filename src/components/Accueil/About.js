import React from "react";
import img_about from "../../assets/img_about.png";
export default function About() {
  return (
    <div className="flex flex-wrap items-center justify-between p-4 sm:mx-auto max-w-screen-xl">
      <div className="md:w-1/2">
        <img src={img_about} alt="img_about" className=" img-fluid" />
      </div>
      <div className="md:w-1/2">
      <div className=" border bg-[#34A853] rounded-xl py-1 w-16 mb-4"></div>
        <h3 className=" text-3xl font-bold mb-4">Notre solution</h3>
        <p className=" text-xl pr-5">
          Toutes les formations au codage sécurisé ne sont pas égales. Les
          développeurs ont besoin d'une pratique concrète à chaque étape de leur
          apprentissage de l'identification des vulnérabilités d'un système.
        </p>
      </div>
    </div>
  );
}
