export default function (board) {
  // Define winning combinations
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6], // Diagonal /
  ];

  // Check for a winner
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { status: board[a], combination: combo };
    }
  }

  // Check for a tie
  if (board.every((cell) => cell === 'x' || cell === 'o')) {
    return { status: 'tie', combination: null };
  }

  return { status: 'running', combination: null };

  // return 'Game is still ongoing';
}
