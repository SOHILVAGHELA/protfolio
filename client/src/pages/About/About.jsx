import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about " id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="/images/sohil.jpeg" alt="" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am a passionate and dedicated Full Stack Developer with a
              Bachelor of Computer Applications (BCA) degree from KSV
              University. I have successfully completed a comprehensive full
              stack development course from Internshala, where I built an
              e-commerce project and a Twitter clone using React, JavaScript,
              Node.js, MongoDB, and Express.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
