import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoutes } from '../app/states/routes/routesSlice';
import Dashboard from './Dashboard';

// The App component keeps track of the global state
const App = () => {
  const routes = useSelector(selectRoutes);

  return (
    <div>
      <Dashboard routes={routes} />
    </div>
  );
};

export default App;
