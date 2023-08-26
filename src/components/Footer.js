import React from "react";
import Logo from "../assets/logo.png";
import icon_face from "../assets/icon_reseauxSociaux/icon_face.png"
import icon_insta from "../assets/icon_reseauxSociaux/icon_insta.png"
import icon_tweeter from "../assets/icon_reseauxSociaux/icon_tweetwe.png"
export default function Footer() {
  return (
    <div>
      <footer className="bg-[#F1F3FE] ">
        <div className="flex  flex-wrap items-center justify-center p-4 sm:mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row">
            <div className=" p-4 md:w-1/4">
              <div className="text-center md:text-left">
                <img src={Logo} alt="logo" className="" />
                <div className=" flex space-x-2 my-2">
                    <img src={icon_face} alt="icon_face" />
                 <img src={icon_insta} alt="icon_face" />
                 <img src={icon_tweeter} alt="icon_face" />
                </div>
              </div>
            </div>
            <div className=" p-4 md:w-1/4">
              <h3 className="text-md font-bold">Liens</h3>
              <p className="">
                Connexion <br />
                Accueil <br />
                Display Instagram feeds
                <br />
                Blog
                <br />
                contact
                <br />
              </p>
            </div>
            <div className=" p-4 md:w-1/4">
              <h3 className="text-lg font-bold">À propos</h3>
              <p className=" ">
              Gestion des examens
                <br />
                Recueillir des avis
                <br />
                Envoyer des demandes par courrier électronique
                <br />                 
              </p>
            </div>
            <div className=" p-4 md:w-1/4">
              <h3 className="text-lg font-bold">Entreprise</h3>

              <p className=" ">
                  <a href=" #">Info</a>
                  <br />
                  <a href=" #">Lignes directrices de la marque</a> <br />
                  <a href=" #">Support</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
