import React from "react";
import loadingGif from "../images/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>photo du Monument se charge....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
