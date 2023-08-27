import React from "react";
import Navbar from "../components/Navbar";
import img_solution from "../assets/image_solution/img_solution.png";
import data_security from "../assets/image_solution/data_security.png";
import folder_security from "../assets/image_solution/folder_security.png";
import server_security from "../assets/image_solution/server_security.png";
import shield_security from "../assets/image_solution/shield_security.png";

import "../styles/styles.css";
import Footer from "../components/Footer";
export default function Solution() {
  return (
    <div>
      <Navbar />
      <div className=" mt-[7rem] max-w-screen-xl mx-auto w-full container mb-10">
        <div className=" row-auto flex flex-wrap justify-center items-center">
          <div className=" w-1/2">
            <img src={img_solution} alt="img_solution" />
          </div>
          <div className=" w-1/2">
            <h1 className=" text-xl md:text-4xl font-bold">Solution</h1>
            <div className=" border bg-[#34A853] rounded-xl py-1 w-16 my-4"></div>
            <p className=" lg:text-3xl font-medium pr-2 ">
              Chez Etulab, nous enseignons le codage sécurisé par le biais de
              laboratoires pratiques fonctionnant dans des environnements de
              développement virtualisés.
            </p>
          </div>
        </div>
         
        <div>
          <h4 className=" text-center text-xl md:text-4xl font-bold">Nos services</h4>
          <h3 className=" text-center text-lg md:text-2xl font-bold my-4">Nous avons des services d’apprentissage intéressant </h3>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-center ">
              {/* service en haut */}
              <div className=" bg-white p-4 shadow-md md:mr-6 md:mb-6 ">
                <div className=" w-full justify-center flex">
                <img src={data_security} alt="data_security" />
                </div>
                <h4 className=" text-[#1B71FF] text-2xl my-4">Sécurité des données</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor id aliquam dignissim risus diam dictum. A lectus in
                  ridiculus viverra id ut dui volutpat volutpat. Vulputate sed
                  imperdiet{" "}
                </p>
              </div>
              <div className=" bg-white p-4 shadow-md md:mb-6 ">
                <div className="w-full justify-center flex">
                <img src={folder_security} alt="folder_security" />
                </div>
                <h4 className=" text-[#1B71FF] text-2xl my-4">Sécurité des fichiers</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor id aliquam dignissim risus diam dictum. A lectus in
                  ridiculus viverra id ut dui volutpat volutpat. Vulputate sed
                  imperdiet{" "}
                </p>
              </div>

              {/* service en bas */}
              <div className="bg-white p-4 shadow-md md:mr-6">
                <div className="w-full justify-center flex">
                <img src={server_security} alt="server_security" />
                </div>
                <h4 className=" text-[#1B71FF] text-2xl my-4">Sécurité des bases de données</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor id aliquam dignissim risus diam dictum. A lectus in
                  ridiculus viverra id ut dui volutpat volutpat. Vulputate sed
                  imperdiet{" "}
                </p>
              </div>
              <div className="bg-white p-4 shadow-md">
                <div className="w-full justify-center flex">
                <img src={shield_security} alt="shield_security" />
                </div>
                <h4 className=" text-[#1B71FF] text-2xl my-4">Sécurité des clouds</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor id aliquam dignissim risus diam dictum. A lectus in
                  ridiculus viverra id ut dui volutpat volutpat. Vulputate sed
                  imperdiet{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
