import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import "./Home.css";
function Home() {
  return (
    <>
      <div className=" home-container">
        <div className="container home-content">
          <h2>Hi 👋I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer!", "Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire me</button>
            <a className="btn btn-cv" href={Resume} download="sohil.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
