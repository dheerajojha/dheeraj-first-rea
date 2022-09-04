import { Link } from "react-router-dom";
import React from "react";
import w1 from "../Asset/images/w1.png";
import w2 from "../Asset/images/w2.png";
import w3 from "../Asset/images/w3.png";
import w4 from "../Asset/images/w4.png";
import "./Product.css";
function Product() {
  return (
    <>
      <section class="product-wrapper">
        <div class="heading">
          <h1>OUR AWESOME PRODUCTS CHOOSE BEST ONE </h1>
        </div>
        <div class="product-container">
          <div class="product-box">
            <div class="product-img">
              <img src={w1} alt="w1" />
            </div>
            <div class="product-text">
              <h2>SMART WATCH</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid quae laboriosam pariatur aperiam
              </p>
              <h1>$50/-</h1>
              <Link to="/about" className="navlink btn">
                Buy Now
              </Link>
            </div>
          </div>
          <div class="product-box">
            <div class="product-img">
              <img src={w2} alt="w2" />
            </div>
            <div class="product-text">
              <h2>SMART WATCH</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid quae laboriosam pariatur aperiam
              </p>
              <h1>$50/-</h1>
              <Link to="/about" className="navlink btn">
                Buy Now
              </Link>
            </div>
          </div>
          <div class="product-box">
            <div class="product-img">
              <img src={w3} alt="w3" />
            </div>
            <div class="product-text">
              <h2>SMART WATCH</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid quae laboriosam pariatur aperiam
              </p>
              <h1>$50/-</h1>
              <Link to="/about" className="navlink btn">
                Buy Now
              </Link>
            </div>
          </div>
          <div class="product-box">
            <div class="product-img">
              <img src={w4} alt="w4" />
            </div>
            <div class="product-text">
              <h2>SMART WATCH</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid quae laboriosam pariatur aperiam
              </p>
              <h1>$50/-</h1>
              <Link to="/" className="navlink btn">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
