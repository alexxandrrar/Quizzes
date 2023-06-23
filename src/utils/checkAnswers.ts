export const checkAnswers = (
  correctAnswers: string[],
  userAnswers: string[]
) => {
  let correctCount = 0;
  let incorrectCount = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === userAnswers[i]) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  }

  return {
    correctCount,
    incorrectCount,
  };
};
