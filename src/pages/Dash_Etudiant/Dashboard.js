import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Dash_Etudiant/Sidebar";
import Navbar from "../../components/Dash_Etudiant/Navbar";
import image_welcome from "../../assets/dashboard/image_welcome.png";
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
      <Sidebar />
      <Navbar />
      <div className="p-4 lg:ml-64">
        <div className=" flex flex-wrap items-center w-full">
          <img src={image_welcome} alt="image_welcome" />
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
      </div>
    </div>
  );
}
