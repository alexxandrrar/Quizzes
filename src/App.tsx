import { Route, Routes } from 'react-router-dom';
import { routes } from './constants/path';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/reduxHook';
import { fetchQuizzes } from './store/quizzActionCreator';

import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuizzes());
  }, []);

  return (
    <div className='App'>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
