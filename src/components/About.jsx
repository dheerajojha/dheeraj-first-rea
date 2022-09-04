import React from "react";
import w12 from "../Asset/images/about.png";
import { FaRegCheckCircle } from "react-icons/fa";
import "./About.css";
function About() {
  return (
    <>
      <section class="about-wrapper" id="about">
        <div class="heading">
          <h1>ABOUT OUR PRODUCT</h1>
        </div>
        <div class="about-container">
          <div class="about-img">
            <img src={w12} alt="w12" />
          </div>
          <div class="about-text">
            <h2>Best And Fashnable Smart Watch For Easy Life</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, eveniet repellat dignissiilis architecto, officiis
              repellendus!
            </p>
            <h4>
              {<FaRegCheckCircle className="icons" />}
              Attractive Watch And Cool Design
            </h4>
            <h4>
              {<FaRegCheckCircle className="icons" />}Install App With Unlimited
              Features
            </h4>
            <h4>
              {<FaRegCheckCircle className="icons" />}Enable Notification For
              Benefit
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
