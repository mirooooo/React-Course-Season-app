import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  //   Ternaty Expretion
  const text =
    season === "winter" ? "Burr, it is chilly" : "Lets Hit The Beach";
  // ====================================
  return (
    <div>
      <h1> {text} </h1>
    </div>
  );
};

export default SeasonDisplay;
