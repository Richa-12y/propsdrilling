import React from "react";

const Button = ({ onClick, buttonText }) => {
  return <div onClick={onClick}>{buttonText}</div>;
};

export default Button;
