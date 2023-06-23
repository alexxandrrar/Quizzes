import { useLocation } from 'react-router-dom';

export const FinishPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedResults = queryParams.get('results');
  const results = encodedResults
    ? JSON.parse(decodeURIComponent(encodedResults))
    : [];
  return (
    <div>
      {results && (
        <div>
          <p>Correct Answers: {results.correctCount}</p>
          <p>Incorrect Answers: {results.incorrectCount}</p>
        </div>
      )}
    </div>
  );
};
