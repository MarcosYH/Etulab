import React from "react";
import iconService_1 from "../../assets/icon_service/iconService_1.png";
import iconService_2 from "../../assets/icon_service/iconService_2.png";
import iconService_3 from "../../assets/icon_service/iconService_3.png";
export default function Service() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between p-4 sm:mx-auto max-w-screen-xl">
        <div className="text-center w-full ">
          <span className=" text-3xl text-center">
            Que pouvez-<span className="text-[#34A853]">vous faire ?</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" p-4 md:w-1/3 text-center m-2">
            <div className=" flex w-full justify-center">
            <img
              src={iconService_1}
              alt="iconService_1"
              className=" img-fluid my-4"
            />
            </div>
            <span className=" text-2xl font-medium text-[#2B3377] ">
              Apprendre la programmation défensive à travers des vulnérabilités
              réelles
            </span>
            <p className=" my-4 text-lg">
              Notre plateforme évolue en permanence pour intégrer les dernières
              avancées en matière de pratiques modernes de codage sécurisé.
            </p>
          </div>
          <div className="  p-4 md:w-1/3 text-center m-2">
            <div className="flex w-full justify-center">
            <img
              src={iconService_2}
              alt="iconService_1"
              className=" img-fluid my-4"
            />
            </div>
            <span className="text-2xl font-medium text-[#2B3377] ">
              Faires des testes sur des environnements virtuels
            </span>
            <p className=" my-4 text-lg">
              Les laboratoires se déroulent dans de véritables environnements de
              développement créés en quelques secondes et accessibles par le
              biais d'un navigateur web.
            </p>
          </div>
          <div className=" p-4 md:w-1/3 text-center m-2">
            <div className="flex w-full justify-center">
            <img
              src={iconService_3}
              alt="iconService_1"
              className="img-fluid my-4"
            />
            </div>
            <span className="text-2xl font-medium text-[#2B3377]">Pas de quiz sur le codage sécurisé mais plutôt la pratique</span>
            <p className=" my-4 text-lg">
              Les questionnaires, les diapositives et les vidéos sont inadéquats
              - c'est pourquoi des vulnérabilités vieilles de 20 ans existent
              toujours.
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
}
