import React from "react";
import "./Project.css";
function Project() {
  return (
    <>
      <div className=" project py-3" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Project
        </h2>
        <hr />
        <p className="pb-3 text-center ">
          The e-store project is an e-commerce web application built using the
          MERN stack (MongoDB, Express.js, React, Node.js). It offers secure
          user authentication, a detailed product catalog with search and filter
          options, and a persistent shopping cart. The checkout process
          integrates payment gateways like PayPal and Stripe. Users can manage
          their profiles and order histories. The application is fully
          responsive, providing a smooth experience on all devices. Security
          measures such as JWT authentication and password hashing are
          implemented to protect user data.
        </p>
        {/* card Design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">E-store</span>
                <img
                  src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly mt-3 m-1">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Reactjs</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase ">E-commerce Store</h5>
                {/* <div className="ad-btn"></div> */}
                <a
                  className="add-btn "
                  href="https://e-store-5259.onrender.com"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">URL-SHORTNER</span>
                <img src="/images/ulr.png" alt="project1" />
              </div>
              <div className="card-image-overly mt-3 m-1">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Reactjs</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase ">URL-SHORTNER </h5>
                {/* <div className="ad-btn"></div> */}
                <a
                  className="add-btn "
                  href="https://url-live-1.onrender.com"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Todo-app</span>
                <img src="/images/todo.png" alt="project1" />
              </div>
              <div className="card-image-overly mt-3 m-1">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Reactjs</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase ">todo app</h5>
                {/* <div className="ad-btn"></div> */}
                <a
                  className="add-btn "
                  href="https://todo-ru48.onrender.com"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded mt-5">
              <div className="card-image">
                <span className="card-notify-badge">Todo-app</span>
                <img src="/images/todo2.png" alt="project1" />
              </div>
              <div className="card-image-overly mt-3 m-1">
                <span className="card-detail-badge">Reactjs</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase ">todo app</h5>
                {/* <div className="ad-btn"></div> */}
                <a
                  className="add-btn "
                  href="https://todo-woad-nu.vercel.app/"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded mt-5">
              <div className="card-image">
                <span className="card-notify-badge">Cureency-convertor</span>
                <img src="/images/currency.png" alt="project1" />
              </div>
              <div className="card-image-overly mt-3 m-1">
                <span className="card-detail-badge">Reactjs</span>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase ">Currency-App</h5>
                {/* <div className="ad-btn"></div> */}
                <a
                  className="add-btn "
                  href="https://currency-convertor-eta-ashy.vercel.app/"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
