import React from "react";
import Featurecard from "./Featurecard";

import "./Feature.css";
function Feature() {
  let Featuredata = [
    {
      title: "Notification alert",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia. Sapiente ea eum facere! Dolorum ab assumenda modi delectus tenetur illum impedit quae possimus vel, libero dicta est quos nisi!",
    },
    {
      title: "Live Chat",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia. Sapiente ea eum facere! Dolorum ab assumenda modi delectus tenetur illum impedit quae possimus vel, libero dicta est quos nisi!",
    },
    {
      title: "Heartbeat Tracker",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia. Sapiente ea eum facere! Dolorum ab assumenda modi delectus tenetur illum impedit quae possimus vel, libero dicta est quos nisi!",
    },
    {
      title: "GPS Tracking",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia. Sapiente ea eum facere! Dolorum ab assumenda modi delectus tenetur illum impedit quae possimus vel, libero dicta est quos nisi!",
    },
    {
      title: "Wifi Facility",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia. Sapiente ea eum facere! Dolorum ab assumenda modi delectus tenetur illum impedit quae possimus vel, libero dicta est quos nisi!",
    },
    {
      title: "Weather Update",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, mollitia. Sapiente ea eum facere! Dolorum ab assumenda modi delectus tenetur illum impedit quae possimus vel, libero dicta est quos nisi!",
    },
  ];

  return (
    <>
      <section class="feature-wrapper">
        <div class="heading">
          <h1>Feature Available In The Watch</h1>
        </div>
        <div class="feature-container">
          {Featuredata.map((val, key) => {
            return (
              <Featurecard key={key} title={val.title} detail={val.detail} />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Feature;
