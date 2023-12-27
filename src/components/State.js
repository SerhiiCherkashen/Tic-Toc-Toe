export const state = {
  content: "",
  array: [],
  arrayX: [],
  arrayO: [],
  winArrayX: [],
  winArrayO: [],
  correctAnswers: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
};

export const fnWinner = (array, winArray, who, setWinner) => {
  state.correctAnswers.forEach((el) => {
    for (let i = 0; i < 3; i++) {
      array.forEach((item) => {
        if (el[i] === item) {
          winArray.push(el[i]);
        }
      });
    }
    if (winArray.length === 3) {
      setWinner(who);
    } else {
      winArray = [];
    }
  });
};
