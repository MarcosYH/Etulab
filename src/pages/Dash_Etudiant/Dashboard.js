import React, {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../../components/Dash_Etudiant/Sidebar";
import Navbar from "../../components/Dash_Etudiant/Navbar";
import image_welcome from "../../assets/dashboard/image_welcome.png";
import  icon_drapau from "../../assets/dashboard/icon_drapeau.png"
import  icon_point from "../../assets/dashboard/icon_point.png"
import  icon_trophy from "../../assets/dashboard/icon_trophy.png"
import  icon_certification from "../../assets/dashboard/icon_certification.png"
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const authToken = cookies.get("TOKEN");

        if (!authToken) {
          throw new Error("Auth token not found");
        }

        const response = await axios.get(
          "https://auth-api-adk2.onrender.com/user-info",
          {
            headers: {
              Authorization: authToken,
            },
            params: {
              token: authToken,
            },
          }
        );

        setUser(response.data);
      } catch (error) {
        console.log(error);
        // Traitez les erreurs de manière appropriée
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <div className="p-4 lg:ml-64">
        <div className=" flex flex-wrap items-center w-full">
          <img src={image_welcome} alt="image_welcome"/>
          <div>
            {user && (
              <div>
                <h1 className=" font-bold md:text-6xl sm:text-4xl">
                  Bienvenue, {user.name}!
                </h1>
                {/* <p>Email : {user.email}</p> */}
              </div>
            )}
            <p>Démarrer votre laboratoire ou votre cours de formation</p>
          </div>
          <a
            href="/dashboard"
            type="button"
            className="text-white text-2xl font-bold rounded-lg p-4 py-3 text-center ml-20 md:mr-0 bg-[#2546BE] hover:bg-blue-900"
          >
            Aller au laboratoire
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3>Laboratoires en fonctionnement</h3>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={icon_drapau} className="" alt="icon_drapau"/>
            </div>
          </div>
         <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3>Points</h3>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={icon_point} className="" alt="icon_drapau"/>
            </div>
          </div>
         <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3>Trophées</h3>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={icon_trophy} className="" alt="icon_drapau"/>
            </div>
          </div>
         <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h3>Certifications</h3>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">0</h2>
              <img src={icon_certification} className="" alt="icon_drapau"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
