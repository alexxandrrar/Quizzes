import { useLocation, useNavigate } from 'react-router-dom';
import { ResultsChart } from '../../components/ResultsChart/ResultsChart';
import { Button } from '../../components/Button/Button';
import constants from '../../constants/common.json';

import styles from './FinishPage.module.scss';

export const FinishPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedResults = queryParams.get('results');
  const encodedTime = queryParams.get('elapsed');
  const results = encodedResults
    ? JSON.parse(decodeURIComponent(encodedResults))
    : [];
  const time = encodedTime ? JSON.parse(decodeURIComponent(encodedTime)) : [];
  return (
    <div className={styles.container}>
      <h1>{constants.RESULTS}</h1>
      <div className={styles.results}>
        {results && (
          <div>
            <ResultsChart
              correctAnswers={results.correctCount}
              incorrectAnswers={results.incorrectCount}
            />
          </div>
        )}
        {time && (
          <div className={styles.time}>{`It took you ${Math.floor(
            time / 1000
          )} seconds to complete this quiz 👏`}</div>
        )}
      </div>
      <Button
        tabIndex={0}
        ariaLabel={'go back to the main page'}
        className={styles.btn}
        type='simple'
        onClick={() => navigate('/')}
      >
        Home🏠
      </Button>
    </div>
  );
};
