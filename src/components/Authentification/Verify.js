import React from 'react'
import check_email from "../assets/check_email.png";
export default function Verify() {
  return (
    <div>
      <div className=" text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-500 my-10">
        Veuillez vérifier votre boite mail pour accéder <br /> au lien de
        récupération de votre mot de passe.
      </h1>
        </div>
      <div className=" flex justify-center items-center">
      <img src={check_email} alt="check_email" className=" md:w-1/4 my-10 sm:w-1/3 "/>
      </div>
    </div>
  )
}
