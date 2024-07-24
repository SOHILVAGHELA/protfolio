import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume1.pdf";
import { useTheme } from "../../Contex/ThemeContex";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";
function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
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
          <div data-aos="fade-left" data-aos-easing="ease-in-sine">
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
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9978619720"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="sohil.pdf">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
