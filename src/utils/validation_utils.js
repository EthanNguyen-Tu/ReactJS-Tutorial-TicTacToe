export function checkWinner(squares, sideSize) {
    /*
  Iteratively checks all valid ways to win in Tic-Tac-Toe
  */
    let arr;

    // Check each row
    const allEqual = (arr) => arr.every((val) => val != null && val === arr[0]);

    for (let i = 0; i < squares.length; i += sideSize) {
        arr = squares.slice(i, i + sideSize);
        if (allEqual(arr)) {
            return arr[0];
        }
    }

    // Check each column
    for (let i = 0; i < sideSize; i++) {
        arr = [];
        for (let j = i; j < squares.length; j += sideSize) {
            arr.push(squares[j]);
        }
        if (allEqual(arr)) {
            return arr[0];
        }
    }

    // Check topleft-botright diagonal
    for (let i = 0; i < sideSize; i++) {
        arr[i] = squares[i * (sideSize + 1)];
    }
    if (allEqual(arr)) {
        return arr[0];
    }

    // Check topright-botleft diagonal
    for (let i = 0; i < sideSize; i++) {
        arr[i] = squares[(i + 1) * (sideSize - 1)];
    }
    if (allEqual(arr)) {
        return arr[0];
    }

    // Neither player has won
    return null;
}
