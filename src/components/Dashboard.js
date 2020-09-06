import React, { useEffect, useState } from 'react';
import { populateAsync } from '../app/states/routes/routesSlice';
import { useDispatch } from 'react-redux';

const Dashboard = ({ routes }) => {
  const dispatch = useDispatch();
  const [selectedRoute, setSelectedRoute] = useState(null);
  let displayedResult = undefined;

  // This effects only is executed once
  useEffect(() => {
    dispatch(populateAsync());
  }, [dispatch]);

  // This handles the change events over the select React element
  const handleRoutesSelectChange = (e) => {
    setSelectedRoute(e.target.value);
  }

  // This part conditionally sets the returned JSX
  if (selectedRoute === null && routes.length !== 0) {
    displayedResult = (
      <select value={routes[0].tag} onChange={handleRoutesSelectChange}>
        {routes.map(route => <option key={route.tag} value={route.tag}>{route.title}</option>)}
      </select>
    );

    setSelectedRoute(routes[0].tag);
  } else if (selectedRoute !== null) {
    displayedResult = (
      <select value={selectedRoute} onChange={handleRoutesSelectChange}>
        {routes.map(route => <option key={route.tag} value={route.tag}>{route.title}</option>)}
      </select>
    );
  } else {
    displayedResult = (
      <p>
        Fetching data...
      </p>
    );
  }

  return displayedResult;
};

export default Dashboard;