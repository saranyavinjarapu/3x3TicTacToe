import React from "react";
import gamesLogo from "./assets/games.svg";

const Header = () => {
  const header = {
    padding: "5px",
    borderBottom: "1px solid #e7e2e2",
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <div style={header}>
      <img src={gamesLogo} alt="Games Logo" />
      <h2>Team Building Games</h2>
      <h2>
        <a href="https://www.thesprucecrafts.com/tic-tac-toe-game-rules-412170">
          Game Manual
        </a>
      </h2>
    </div>
  );
};

export default Header;
