import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="/images/me.jpg" alt="" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              reprehenderit consequatur quasi eius ullam! Nesciunt totam laborum
              debitis quia maiores minima tempore odio quam. Neque repellat
              dolore deserun blanditiis cuue! Ad obcaecati ea quidem voluptas
              nostrum! Architecto, repellat cupiditate. Id inventore aliquid
              labore, illum velit saepe aut, placeat earum quod quae enim
              deleniti quos ipsa exercitationem ex harum nesciunt quas
              architecto qui consequuntur expedita! Dolor iure provident beatae
              nostrum. Quas laboriosam dolore nesciunt porro nisi maxime
              asperiores distinctio consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
