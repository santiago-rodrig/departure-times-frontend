import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoutesSelect from './RoutesSelect';
import { useSelector } from 'react-redux';
import { selectRoutes, populateAsync } from '../app/states/routes/routesSlice';
import styles from './styles/Dashboard.module.css';

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const dispatch = useDispatch();
  const routes = useSelector(selectRoutes);
  let displayedResult = undefined;

  // This effects only is executed once
  useEffect(() => {
    dispatch(populateAsync());
  }, [dispatch]);

  // This handles the change event over the routes select
  const handleRoutesSelectChange = (e) => {
    setSelectedRoute(e.target.value);
  }

  // This part conditionally sets the returned JSX
  if (selectedRoute === null && routes.status === 'success') {
    setSelectedRoute(routes.value[0].tag);
  } else if (selectedRoute !== null) {
    displayedResult = (
      <RoutesSelect
        routes={routes}
        route={selectedRoute}
        handleChange={handleRoutesSelectChange}
      />
    );
  } else if (routes.status === 'fetching') {
    displayedResult = (
      <p>
        Fetching data...
      </p>
    );
  } else {
    displayedResult = (
      <p>
        Sorry, the data could not be obtained. :(
      </p>
    );
  }

  return (
    <div className={styles.dashboard}>
      {displayedResult}
    </div>
  );
};

export default Dashboard;