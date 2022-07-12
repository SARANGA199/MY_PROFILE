import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";
import Project4 from "./img/portfolio-4.jpg";
import Project5 from "./img/portfolio-5.jpg";
import Project6 from "./img/portfolio-6.jpg";
import Project7 from "./img/portfolio-7.jpg";
import Project8 from "./img/myphoto.jpg";
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
                  View Details
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
                  href="https://github.com/DistributedSystemsSE3020/Movie_Management.git"
                  className="project__btn"
                >
                  View Details
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
                    style={{ height: 450, width: 380 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">My CV Portfolio</h4>
                <h6 className="project__text">
                  Develop by Using <br />
                  React JS JavaScript
                </h6>
                <br />
                <a
                  href="https://github.com/DimagiPerera/My_Portfolio.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Bookshop Management System</h4>
                <h6 className="project__text">
                  C Language FileHandeling <br />
                  Console Display with CRUD
                </h6>
                <br />
                <a
                  href="https://github.com/PulasthiTharaka/Book-Shop-Management-System.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Construction Management System
                </h4>
                <h6 className="project__text">
                  HTML, CSS, JavaScript,
                  <br /> PHP, PHP My Admin
                </h6>
                <br />
                <a
                  href="https://github.com/DimagiPerera/Construction_Management_System.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">MotoService Android MobileApp</h4>
                <h6 className="project__text">
                  Android Studio Java <br />
                  FireBase Database
                </h6>
                <br />
                <a
                  href="https://github.com/DimagiPerera/Moto_Service_App.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Property Management System</h4>
                <h6 className="project__text">
                  Java, JavaServelet JSP <br />
                  PHP My Admin{" "}
                </h6>
                <br />
                <a
                  href="https://github.com/DimagiPerera/Property_Management_System.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Road Management System</h4>
                <h6 className="project__text">
                  Frontend web application
                  <br /> only using html and css
                </h6>
                <br />
                <a
                  href="https://github.com/DimagiPerera/Road_Management_System.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Tutorin Management System </h4>
                <h6 className="project__text">
                  For Gurukula WebApplication <br />
                  ReactJs JavaScript,
                  <br />
                  Laravel PHP PHPMyAdmin
                </h6>
                <br />
                <a
                  href="https://github.com/SLIIT-FacultyOfComputing/itp_project-itp2021_s2_b06_g5.git"
                  className="project__btn"
                >
                  View Details
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
