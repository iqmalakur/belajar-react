/* eslint-disable react/prop-types */
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(idx) {
    if (squares[idx] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner : " + winner
    : "Next player : " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((_, idx) => (
          <Square
            key={idx}
            value={squares[idx]}
            onSquareClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    const char = squares[a];

    if (char !== null && squares[b] === char && squares[c] === char) {
      return char;
    }
  }

  return false;
}
