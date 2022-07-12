import React from "react";
import "./Skills.css";
import ic1 from "./img/123 (1).png";
import ic2 from "./img/123 (2).png";
import ic3 from "./img/123 (3).png";
import ic4 from "./img/123 (4).png";
import ic5 from "./img/123 (5).png";
import ic6 from "./img/123 (6).png";
import ic7 from "./img/123 (7).png";
import ic8 from "./img/123 (8).png";
import ic9 from "./img/123 (9).png";
import ic10 from "./img/123 (10).png";
import ic11 from "./img/123 (11).png";
import ic12 from "./img/123 (12).png";
import ic13 from "./img/123 (13).png";
import ic14 from "./img/123 (14).png";
import ic15 from "./img/123 (15).png";
import ic16 from "./img/123 (16).png";

function Skills() {
  return (
    <div className="service component__space" id="Skills">
      <h1 className="heading"> My Skills </h1>
      <div className="div1 skill">
        <div className="div2">
          <li>
            <h1 className="h1">Sql </h1>
            <span className="bar">
              <span className="sql"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">R </h1>
            <span className="bar">
              <span className="r"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Xml </h1>
            <span className="bar">
              <span className="xml"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Kotlin</h1>
            <span className="bar">
              <span className="kotlin"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Html Css </h1>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
        </div>
        <div className="div3 ">
          <li>
            <h1 className="h1">Python</h1>
            <span className="bar">
              <span className="py"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Laravel </h1>
            <span className="bar">
              <span className="lv"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Angular Js </h1>
            <span className="bar">
              <span className="an"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">React Js</h1>
            <span className="bar">
              <span className="rj"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Php </h1>
            <span className="bar">
              <span className="php"></span>
            </span>
          </li>
        </div>
        <div className="div4">
          <li>
            <h1 className="h1">JavaScript</h1>
            <span className="bar">
              <span className="js"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">Java</h1>
            <span className="bar">
              <span className="java"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">C++ </h1>
            <span className="bar">
              <span className="cpp"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">C# </h1>
            <span className="bar">
              <span className="cs"></span>
            </span>
          </li>
          <li>
            <h1 className="h1">C </h1>
            <span className="bar">
              <span className="c"></span>
            </span>
          </li>
        </div>
      </div>
      <div className="div5">
        <img src={ic8} alt="" className="ic" />
        <img src={ic3} alt="" className="ic" />
        <img src={ic4} alt="" className="ic" />
        <img src={ic5} alt="" className="ic" />
        <img src={ic6} alt="" className="ic" />
        <img src={ic7} alt="" className="ic" />
        <img src={ic9} alt="" className="ic" />
        <img src={ic12} alt="" className="ic" />
        <img src={ic11} alt="" className="ic" />
        <img src={ic15} alt="" className="ic" />
        <img src={ic2} alt="" className="ic" />
        <img src={ic1} alt="" className="ic" />
        <img src={ic10} alt="" className="ic" />
        <img src={ic13} alt="" className="ic" />
        <img src={ic14} alt="" className="ic" />
        <img src={ic16} alt="" className="ic" />
      </div>
    </div>
  );
}

export default Skills;
