import React from "react";
import "./Core.css";
import {
  FaUserCircle,
  FaRecycle,
  FaPowerOff,
  FaAllergies,
} from "react-icons/fa";
import coreimg from "../Asset/images/core_img.png";
function Core() {
  return (
    <>
      <section class="core-wrapper">
        <div class="heading">
          <h1>OUTSTANDING CORE FEATURES OF THE PRODUCT</h1>
        </div>
        <div class="core-container">
          <div class="core-img">
            <img src={coreimg} alt="core" />
          </div>
          <div class="core-box">
            <div class="core-inner-box">
              <div class="core-text">
                <h2>
                  {" "}
                  {<FaUserCircle className="icons" />} High Security Feature
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eius assumenda voluptate sunt ratione tenetur repellendus
                  reiciendis fuga aliquid officiis
                </p>
              </div>
            </div>
            <div class="core-inner-box">
              <div class="core-text">
                <h2>
                  {<FaPowerOff className="icons" />} High Security Feature
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eius assumenda voluptate sunt ratione tenetur repellendus
                  reiciendis fuga aliquid officiis
                </p>
              </div>
            </div>
            <div class="core-inner-box">
              <div class="core-text">
                <h2>{<FaRecycle className="icons" />} High Update</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eius assumenda voluptate sunt ratione tenetur repellendus
                  reiciendis fuga aliquid officii
                </p>
              </div>
            </div>
            <div class="core-inner-box">
              <div class="core-text">
                <h2> {<FaAllergies className="icons" />} Unlimited Features</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eius assumenda voluptate sunt ratione tenetur repellendus eius
                  assumenda vo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Core;
