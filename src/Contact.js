import React from "react";
import "./Contact.css";
import contactImg from "./img/contact.jpg";
import emailjs from "emailjs-com";

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
            <img src={contactImg} alt="" className="contact__img" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
