import spinner from "../assets/spinner.gif";
import React from "react";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="spinner"
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
