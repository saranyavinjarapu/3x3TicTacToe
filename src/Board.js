import React, { useState, useEffect } from "react";
import Square from "./Square";
import calculateWinner from "./helpers";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const gameGrid = {
  display: "grid",
  gridGap: "1px",
  gridTemplateColumns: "repeat(3,1fr)",
  marginTop: "10px",
  marginBottom: "10px",
  justifyContent: "center",
};

const Board = () => {
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  const [gameSquares, setGameSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handleGameSquareInput = (index) => {
    const updatedGameSquares = gameSquares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setGameSquares(updatedGameSquares);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setGameSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  useEffect(() => {
    const winnerValue = calculateWinner(gameSquares);
    if (winnerValue) {
      setWinner(winnerValue);
      setCurrentPlayer("");
    }
  }, [gameSquares, setWinner]);

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{currentPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle} onClick={resetGame}>
        Reset
      </button>
      <div style={boardStyle}>
        <div style={gameGrid}>
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <Square
                winner={winner}
                key={i}
                onClick={() => handleGameSquareInput(i)}
                value={gameSquares[i]}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
