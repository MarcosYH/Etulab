/* eslint-disable react/style-prop-object */
import React from "react";
import icon_js from "../../assets/icon_lab/icon_js.png";
import icon_ts from "../../assets/icon_lab/icon_ts.png";
import icon_php from "../../assets/icon_lab/icon_php.png";
import icon_angular from "../../assets/icon_lab/icon_angular.png";
import icon_vuejs from "../../assets/icon_lab/icon_vuejs.png";
import icon_docker from "../../assets/icon_lab/icon_docker.png";
import icon_reactjs from "../../assets/icon_lab/icon_reactjs.png";
import icon_nodejs from "../../assets/icon_lab/icon_nodejs.png";
import icon_flutter from "../../assets/icon_lab/icon_flutter.png";
import icon_nextjs from "../../assets/icon_lab/icon_nextjs.png";
import icon_mongodb from "../../assets/icon_lab/icon_mongodb.png";
import icon_andoid from "../../assets/icon_lab/icon_andoid.png";
import icon_taillwind from "../../assets/icon_lab/icon_taillwind.png";
import icon_firebase from "../../assets/icon_lab/icon_firebase.png";
import icon_c from "../../assets/icon_lab/icon_c++.png";
import icon_html3 from "../../assets/icon_lab/icon_html3.png";
import icon_c2 from "../../assets/icon_lab/icon_c#.png";
import icon_aws from "../../assets/icon_lab/icon_aws.png";
import icon_html5 from "../../assets/icon_lab/icon_html5.png";
import icon_rubi from "../../assets/icon_lab/icon_rubi.png";
import icon_sql from "../../assets/icon_lab/icon_sql.png";
import icon_django from "../../assets/icon_lab/icon_django.png";
import icon_java from "../../assets/icon_lab/icon_java.png";
import icon_wordpress from "../../assets/icon_lab/icon_wordpress.png";
export default function LabTechnologies() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center p-4 sm:mx-auto max-w-screen-lg">
        <div className="text-center w-full ">
          <span className=" text-3xl text-center">Lab Technologies</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" p-4 md:w-1/4">
            <div className="flex justify-center">
              <div className="w-1/2 m-2  ">
                <a href=" #">
                  <img src={icon_js} alt="icon_js" className="  mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_ts} alt="icon_ts" className=" mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_php} alt="icon_php" className=" " />
                </a>
              </div>

              <div className="w-1/2 m-2">
                <a href=" #">
                  <img
                    src={icon_angular}
                    alt="icon_angular"
                    className="  mb-3"
                  />
                </a>
                <a href=" #">
                  <img src={icon_vuejs} alt="icon_vuejs" className=" mb-3" />
                </a>
                <a href=" #">
                  <img
                    src={icon_docker}
                    alt="icon_docker"
                    className="md:w-96 mb-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" p-4 md:w-1/4">
            <div className="flex justify-center">
              <div className="w-1/2 m-2  ">
                <a href=" #">
                  <img
                    src={icon_reactjs}
                    alt="icon_reactjs"
                    className="  mb-3"
                  />
                </a>
                <a href=" #">
                  <img src={icon_nodejs} alt="icon_nodejs" className="  mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_flutter} alt="icon_flutter" className=" " />
                </a>
              </div>

              <div className="w-1/2 m-2">
                <a href=" #">
                  <img src={icon_nextjs} alt="icon_nextjs" className=" mb-3" />
                </a>
                <a href=" #">
                  <img
                    src={icon_mongodb}
                    alt="icon_mongodb"
                    className="  mb-3"
                  />
                </a>
                <a href=" #">
                  <img src={icon_andoid} alt="icon_andoid" className=" mb-3" />
                </a>
              </div>
            </div>
          </div>
          <div className=" p-4 md:w-1/4">
            <div className="flex justify-center">
              <div className="w-1/2 m-2  ">
                <a href=" #">
                  <img
                    src={icon_taillwind}
                    alt="icon_taillwind"
                    className="  mb-3"
                  />
                </a>
                <a href=" #">
                  <img
                    src={icon_firebase}
                    alt="icon_firebase"
                    className="  mb-3"
                  />
                </a>
                <a href=" #">
                  <img src={icon_c} alt="icon_c" className=" " />
                </a>
              </div>

              <div className="w-1/2 m-2">
                <a href=" #">
                  <img src={icon_html3} alt="icon_html3" className=" mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_c2} alt="icon_c2" className="  mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_aws} alt="icon_aws" className="  mb-3" />
                </a>
              </div>
            </div>
          </div>
          <div className=" p-4 md:w-1/4">
            <div className="flex justify-center ">
              <div className="w-1/2 m-2  ">
                <a href=" #">
                  <img src={icon_html5} alt="icon_html5" className="  mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_rubi} alt="icon_rubi" className="  mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_sql} alt="icon_sql" className=" " />
                </a>
              </div>

              <div className="w-1/2 m-2">
                <a href=" #">
                  <img src={icon_django} alt="icon_django" className=" mb-3" />
                </a>
                <a href=" #">
                  <img src={icon_java} alt="icon_java" className="  mb-3" />
                </a>
                <a href=" #">
                  <img
                    src={icon_wordpress}
                    alt="icon_wordpress"
                    className="  mb-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
