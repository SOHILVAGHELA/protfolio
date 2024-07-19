import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { useTheme } from "../../Contex/ThemeContex";

import "./Home.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";
function Home() {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((preState) => (preState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className=" home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BiSolidSun size={30} />
          )}
        </div>
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
