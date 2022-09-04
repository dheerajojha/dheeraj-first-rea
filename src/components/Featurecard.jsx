import "./Featurecard.css";
import React from "react";
function Featurecard(props) {
  const { title, detail } = props;
  return (
    <>
      <div class="feature-box">
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
    </>
  );
}

export default Featurecard;
