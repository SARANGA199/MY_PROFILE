import React, { useState } from "react";
import "./Home.css";

import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo5.png";
import Typical from "react-typical";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className=""></div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Upcoming</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>

          {show ? (
            <div className="sideNavbar1">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Home">
                    Home
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#About">
                    About
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Services">
                    Services
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Portfolio">
                    Projects
                  </a>
                </li>

                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Skills">
                    Skills
                  </a>
                </li>

                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Blog">
                    Upcoming
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10  left">Hi, there</h1>
              <h2 className="home__text pz__10">I’m Piumika Saranga</h2>
              <h3 className="home__text sweet pz__10 " style={{ fontSize: 50 }}>
                I’m a
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    500,
                    "Programmer ",
                    2000,
                    "UI/UX Designer",
                    2000,
                    "Android App Developer",
                    2000,
                  ]}
                />
              </h3>
              <h5 className="home__text pz__10"></h5>
              <br></br>
              <br></br>

              <a href="https://wa.me/783034591">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo2}
                  alt=""
                  className="logo2"
                />
              </a>
              <a href="https://www.linkedin.com/in/dimagi-perera-63a40521a">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo3}
                  alt=""
                  className="logo1"
                />
              </a>
              <a href="https://github.com/DimagiPerera">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo4}
                  alt=""
                  className="logo1"
                />
              </a>
              <a href="">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo5}
                  alt=""
                  className="logo1"
                />
              </a>
              <a href="mailto:dimaginipunika@gmail.com">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo1}
                  alt=""
                  className="logo1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
