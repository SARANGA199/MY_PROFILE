import React from "react";
import "./Blog.css";
import Blog1 from "./img/portfolio-10.jpg";
import Blog3 from "./img/portfolio-11.jpg";

function Blog() {
  return (
    <div className="blog component__space bodyBlog" id="Blog">
      <div className="heading">
        <h1 className="heading">Upcoming Projects</h1>
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
                    src={Blog1}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h4 className="project__text">Online Chat app</h4>
                <h5 className="project__text">Using MERN Stack and SocketIO</h5>
                <a
                  href="https://github.com/SARANGA199/chat-app"
                  className="blog project__btn btn"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Blog3}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h4 className="project__text">Online Book Store </h4>
                <h5 className="project__text">Using Flutter</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
