import React, { useState } from "react";
import Home from "../../pages/Home/Home.jsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import Menu from "../Menus/Menu.jsx";

import "./Layout.css";

function Layout() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineArrowLeft size={30} />
              ) : (
                <AiOutlineArrowRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle}></Menu>
        </div>
        <div className="container">
          <Home></Home>
        </div>
      </div>
    </>
  );
}

export default Layout;
