import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <section className=" ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
              Contactez-nous
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
              Vous avez un problème technique ? Vous souhaitez nous faire part
              de vos commentaires ? N'hésitez pas à nous contacter.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-3"
                  placeholder="Entrez votre email..."
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-3"
                  placeholder="Faites-nous savoir comment nous pouvons vous aider"
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="p-3 w-full mb-5 text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                  placeholder="Laisser un commentaire..."
                  defaultValue={""}
                />
              </div>
              <a
                href=" #"
                type="submit"
                className="text-white w-full rounded-lg py-3 text-center bg-[#2546BE] hover:bg-blue-900"
              >
                Envoyer 
              </a>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
