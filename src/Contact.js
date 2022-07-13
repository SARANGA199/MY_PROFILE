import React from "react";
import "./Contact.css";
import contactImg from "./img/contact.jpg";
import emailjs from "emailjs-com";

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

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_bndtc8a",
      e.target,
      "user_sJ8qloEUZQOSpViQ8XV7w"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Contact Me.</h1>
                <p className="hire__text white"></p>
                <p className="hire__text white">
                  Send E-mail to <strong>piumikasaranga@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name "
                  name="name"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email"
                  name="email"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                  name="subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col__2">
            <img
              src={contactImg}
              style={{ height: 450 }}
              alt=""
              className="contact__img"
            />
          </div>
        </div>
      </form>

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

export default Contact;
