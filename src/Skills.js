import React from "react";
import "./Skills.css";
import certificate1 from "./img/cet1.jpeg";
import certificate2 from "./img/cet2.jpeg";
import certificate3 from "./img/cet3.jpeg";
import certificate4 from "./img/cet4.jpeg";
import certificate5 from "./img/cet5.jpeg";

function Skills() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Achievements</h1>
        <p className="heading p__color"></p>
        <p className="heading p__color"></p>
      </div>
      <div>
        <h2 className="heading leftSide">SLIIT Dean's List Certificates</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={certificate1}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={certificate2}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={certificate3}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="heading leftSide">SLIIT Scholarships</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={certificate4}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={certificate5}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
