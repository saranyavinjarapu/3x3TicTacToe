import React from "react";

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const Square = (props) => {
  const { value, winner, onClick } = props;
  return (
    <button
      type="button"
      style={squareStyle}
      onClick={value ? undefined : onClick}
      disabled={value ? true : Boolean(winner)}
    >
      {value && value}
    </button>
  );
};

export default Square;
