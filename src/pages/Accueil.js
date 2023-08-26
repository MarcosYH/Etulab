import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Accueil/Header";
import About from "../components/Accueil/About";
import Service from "../components/Accueil/Service";
import LabTechnologies from "../components/Accueil/LabTechnologies";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Accueil() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Header/>
          <About/>
          <Service/>
          <LabTechnologies/>
          <Footer/>
        </div>
      )}
    </div>
  );
}
