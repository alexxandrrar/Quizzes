import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IResultsChartProps {
  correctAnswers: number;
  incorrectAnswers: number;
}

export const ResultsChart: FC<IResultsChartProps> = ({
  correctAnswers,
  incorrectAnswers,
}): JSX.Element => {
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'answers',
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ['#eeb16b', '#f3b1c3'],
        borderColor: ['#f5a54a', '#f68fac'],
        borderWidth: 1,
        offset: 20,
      },
    ],
  };
  return <Pie data={data} />;
};
