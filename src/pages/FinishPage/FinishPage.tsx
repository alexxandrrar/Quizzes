import { useLocation } from 'react-router-dom';
import { ResultsChart } from '../../components/ResultsChart/ResultsChart';
import constants from '../../constants/common.json';

import styles from './FinishPage.module.scss';

export const FinishPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedResults = queryParams.get('results');
  const results = encodedResults
    ? JSON.parse(decodeURIComponent(encodedResults))
    : [];
  return (
    <div className={styles.container}>
      <h1>{constants.RESULTS}</h1>
      <h2>{constants.SMILE}</h2>
      {results && (
        <div className={styles.chartContainer}>
          <ResultsChart
            correctAnswers={results.correctCount}
            incorrectAnswers={results.incorrectCount}
          />
        </div>
      )}
    </div>
  );
};
