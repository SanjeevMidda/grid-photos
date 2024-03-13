import React, { useState } from "react";
import logo from "../images/logo.svg";

const Photo = ({ image, rotate, index, width, height, top }) => {
  const [status, setStatus] = useState(true);

  let photoStyles = {
    transform: `rotate(${rotate}deg)`,
    width: width,
    height: height,
    zIndex: index,
    left: status ? "500px" : top,
    top: "200px",
  };

  return (
    <div
      onClick={() => {
        setStatus(!status);
      }}
      className="photo"
      style={photoStyles}
    >
      {/* {status ? <img src={image} alt="" style={photoStyles} /> : <h5>hello</h5>} */}
      <img src={image} alt="" style={photoStyles} />
    </div>
  );
};

export default Photo;
