import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Hero from "../Asset/images/hero_img.png";
function Home() {
  return (
    <section className="home-wrapper" id="home">
      <div className="home-title">
        <h1>ALL NEW FOR BETTER YOU</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quae
          laboriosam pariatur aperiam atque minus debitis enim deleniti libero
          maxime
        </p>
        <div className="home-btn">
          <Link to="/" className="btn">
            Order Now
          </Link>
        </div>
      </div>
      <div className="home-img">
        <img src={Hero} alt="heroimg" />
      </div>
    </section>
  );
}
export default Home;
