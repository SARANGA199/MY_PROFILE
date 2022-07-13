import React from "react";
import "./About.css";
import aboutImg from "./img/myphoto.jpg";

//  Up To Top Btn
window.addEventListener("scroll", function () {
  const upToTop = document.querySelector("a.bottom__to__top");
  upToTop.classList.toggle("active", window.scrollY > 0);
});
const About = () => {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <br />
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <br />
            <br />
            <div className="about__meta">
              <p className="about__text p__color">
                I am an 3rd Year undergraduate student at Sri Lanka Institute of
                Information Technology(SLIIT), graduating with a BSc (Hons) in
                Information Technology, Software Engineering Specialization.
              </p>
              <br />
              <p className="about__text p__color">
                I have acquired both theoretical and practical knowledge from
                both academic and nonacademic resources. I am a self-motivated,
                innovative, and quick learner, who is willing to perform towards
                the advancement of the IT field.
              </p>
              <p className="about__text p__color">
                I am interested in an employer who cares strongly about the
                personal and professional development of their employees and who
                has ongoing programs designed to nurture, develop and promote an
                individual to their maximum potential.
              </p>
              <br />
              <br />

              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1vSldqVc-m2qZ-w5zpxFTDugs99JhtJwO/view?usp=sharing">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="https://medium.com/@piumikasaranga">
                  <button className="about btn pointer">My Blog</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;
