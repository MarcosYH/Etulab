import React from "react";
import Navbar from "../components/Navbar";
import SecureAnimation from "../components/SecureAnimation";
import "../styles/styles.css";
export default function Solution() {
  return (
    <div>
      <Navbar />
      <div className=" mt-[18rem] ">
        <div className="fond_header z-0">
          <SecureAnimation />
        </div>
        <div className=" text-center w-full absolute z-10">
          <h1 className=" text-4xl font-bold">Solution</h1>
          <p>
            Chez Etulab, nous enseignons le codage sécurisé par le biais de
            laboratoires pratiques fonctionnant dans des environnements de
            développement virtualisés.
          </p>
          <p>
            Oubliez les diaporamas ennuyeux et les quiz inefficaces qui se
            contentent d'apprendre aux développeurs à passer des tests - et qui
            sont oubliés plus vite qu'ils ne peuvent dire " faille de sécurité "
            ! Entrez dans le monde réel des vraies vulnérabilités et des vraies
            solutions, avec une formation agréable, efficace et pratique qui
            s'intègre parfaitement dans le cycle de vie du développement
            logiciel de votre entreprise.
          </p>
        </div>
      </div>
    </div>
  );
}
