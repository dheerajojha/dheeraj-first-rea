import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
function Nav() {
  const [click, setclick] = useState(false);
  const handler = () => setclick(!click);
  return (
    <header className={(scroll) => (10 ? "sticky" : "")}>
      <div className="logo" style={{ color: "white" }}>
        LoGo
      </div>
      <ul className={click ? "myul active" : "myul"}>
        <li>
          <Link to="#home" className="navlink">
            home
          </Link>
        </li>
        <li>
          <Link to="/feature" className="navlink">
            Feature
          </Link>
        </li>
        <li>
          <Link to="#about" className="navlink">
            About
          </Link>
        </li>
        <li>
          <Link to="/product" className="navlink">
            Product
          </Link>
        </li>
        <li>
          <Link to="/others" className="navlink">
            Others
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navlink">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamberger" onClick={handler}>
        {click ? (
          <FaTimes color="white" size={25} />
        ) : (
          <FaBars color="white" size={25} />
        )}
      </div>
    </header>
  );
}

export default Nav;
