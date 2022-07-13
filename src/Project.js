import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-111.jpg";
import Project2 from "./img/vote.jpg";
import Project3 from "./img/portfolio-33.jpg";
import Project4 from "./img/eChanneling.jpg";
import Project5 from "./img/portfolio-5.jpg";
import Project6 from "./img/portfolio-6.jpg";
import Project7 from "./img/portfolio-7.jpg";
import Project8 from "./img/waste.jpg";
import Project9 from "./img/project9.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color"></p>
        <p className="heading p__color"></p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project7}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Research Project Management <br />
                  Tool for SLIIT
                </h4>
                <h6 className="project__text">
                  Develop Using MERN <br />
                  React JS, Node JS <br />
                  Mongo DB, Express JS
                  <br />
                </h6>
                <br />
                <br />
                <a
                  href="https://github.com/SARANGA199/Project-Management-Tool"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project9}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Movie Tickets <br /> Reservatoin System
                </h4>
                <h6 className="project__text">
                  Developed by Using <br />
                  Mern,
                  <br />
                  MicroService Architecture , WSO2 EI
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Online-movie-reservation"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project8}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Waste Management System</h4>
                <h6 className="project__text">
                  Develop by Using <br />
                  Mern Stack
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Waste-Management-System"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project1}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Disney Re-Design</h4>
                <h6 className="project__text">
                  Develop by using React <br />
                  Redux ,CSS, FireBase
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/disney-clone"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project2}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Online Voting System</h4>
                <h6 className="project__text">
                  HTML, CSS, JavaScript,
                  <br /> PHP, PHP My Admin
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Online_Voting_System"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project3}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Classic Curves Android MobileApp
                </h4>
                <h6 className="project__text">
                  Android Studio Java <br />
                  FireBase Database
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Online-Clothing-Store"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project4}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">E-Channeling System</h4>
                <h6 className="project__text">
                  Java, JavaServelet JSP <br />
                  PHP My Admin{" "}
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/E_Channeling_System"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project5}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Medical Lab System</h4>
                <h6 className="project__text">
                  OSGI framework
                  <br /> Develop using Java and Eclipse
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Medical_Lab"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project6}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Shopping Cart </h4>
                <h6 className="project__text">
                  Develop by Using <br />
                  KoaJS,NodeJS,ReactJS
                </h6>
                <br />
                <a
                  href="https://github.com/SARANGA199/Shopping_Cart_KoaJS"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
