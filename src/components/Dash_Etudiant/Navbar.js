import React, { useEffect, useState } from "react";
import Profile from "../../assets/dashboard/Profil.png";
import "../../styles/Navbar.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function Navbar() {
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
    <div className="p-4 lg:ml-64 bg-white">
      <nav>
        <div className=" p-4 flex justify-end border-b-2">
          <div className="flex mr-5">
            <div className="hover:bg-[#0A2FB6] mx-2 bg-[#F0F0F0] flex dash_link p-2 rounded-md items-center mr-20">
              <a className="block px-4 text-sm " href=" #">
                Running labs
              </a>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M1.19632 0L0 0.479345V14.509L1.19632 15L15 7.98519V7.01481L1.19632 0ZM1.53374 13.4217V1.57833L13.1902 7.50585L1.53374 13.4217Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div className="seach-bar justify-center flex">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 border rounded-lg"
              />
              <button className="ml-2 bg-[#0A2FB6] text-white px-4 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center">
            {user && (
              <span className="text-gray-600 text-sm mr-2"> {user.name} </span>
            )}
            <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </nav>
    </div>
  );
}
