type Move = {
  move?: "rock" | "paper" | "scissors";
};
enum answerEnum {
  player1 = "player1",
  player2 = "player2",
  tie = "tie",
}
const player1: Move = {
  move: "rock",
};
const player2: Move = {
  move: "scissors",
};

const answer = {
  player1: answerEnum.player1,
  player2: answerEnum.player2,
  tie: answerEnum.tie,
};
const playGame = (player1: Move, player2: Move): string | Object => {
  try {
    if (!Object.keys(player1) || !Object.keys(player2)) throw new Error("nn");
    if (player1.move === player2.move) return answer.tie;
    if (
      (player1.move === "rock" && player2.move === "scissors") ||
      (player1.move === "paper" && player2.move === "rock") ||
      (player1.move === "scissors" && player2.move === "paper")
    )
      return answer.player1;
    return answer.player2;
  } catch (error) {
    return "error";
  }
};

const play = playGame(player1, player2);
console.log(play);
