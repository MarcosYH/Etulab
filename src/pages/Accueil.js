import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Accueil/Header";
import About from "../components/Accueil/About";
import Service from "../components/Accueil/Service";
import LabTechnologies from "../components/Accueil/LabTechnologies";
import Footer from "../components/Footer";

export default function Accueil() {
  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
      <Service/>
      <LabTechnologies/>
      <Footer/>
    </div>
  );
}
