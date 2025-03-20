import Board from "../Board/Board";
import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
    const sideSize = 5;
    const [history, setHistory] = useState([Array(sideSize ** 2).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description = move > 0 ? "Go to move #" + move : "Go to game start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="tic-tac-toe">
            {sideSize && (
                <div className="tic-tac-toe-board">
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquares}
                        onPlay={handlePlay}
                        sideSize={sideSize}
                    />
                </div>
            )}
            <div className="tic-tac-toe-info">
                <h3>Game History:</h3>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default TicTacToe;
