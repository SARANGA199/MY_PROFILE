import React from "react";
import "./Blog.css";
import Blog1 from './img/portfolio-10.jpg';
import Blog2 from './img/portfolio-9.png';
import Blog3 from './img/portfolio-11.jpg';

function Blog() {
  return (
    <div className="blog component__space bodyBlog" id="Blog">
      <div className="heading">
        <h1 className="heading">Upcoming Projects</h1>
        <p className="heading p__color">
         
        </p>
        <p className="heading p__color">
          
        </p>
      </div>
      <div className="container">
          <div className="row">
         


              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">Employee Management System</h4>
                         <h5 className="project__text">Using .Net</h5>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>


              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">Hospital Management System </h4>
                         <h5 className="project__text">Using Spring Boot</h5>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

            

   

          </div>
      </div>
    </div>
  );
}

export default Blog;
