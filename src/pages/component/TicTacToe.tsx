import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  // Handle cell click
  const handleClick = (index: number) => {
    // If game over or cell already filled
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (!newBoard.includes("")) {
      setWinner("Draw");
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Check for winning combinations
  const checkWinner = (board: string[]) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🎮 Tic Tac Toe</h1>

      <div className="grid grid-cols-3 gap-1 bg-gray-400">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 bg-white flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-blue-100 transition-colors"
          >
            {cell}
          </div>
        ))}
      </div>

      <div className="mt-6 text-xl font-semibold">
        {winner
          ? winner === "Draw"
            ? "It's a Draw! 🤝"
            : `🏆 Winner: ${winner}`
          : `Next Turn: ${isXNext ? "X" : "O"}`}
      </div>

      {winner && (
        <button
          onClick={resetGame}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
