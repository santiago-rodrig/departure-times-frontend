import React, { useEffect, useState } from 'react';
import { populateAsync } from '../app/states/routes/routesSlice';
import { useDispatch } from 'react-redux';

const RoutesSelect = ({ routes }) => {
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
  if (selectedRoute === null && routes.status === 'success') {
    displayedResult = (
      <select value={routes.value[0].tag} onChange={handleRoutesSelectChange}>
        {routes.value.map(route => <option key={route.tag} value={route.tag}>{route.title}</option>)}
      </select>
    );

    setSelectedRoute(routes.value[0].tag);
  } else if (selectedRoute !== null) {
    displayedResult = (
      <select value={selectedRoute} onChange={handleRoutesSelectChange}>
        {routes.value.map(route => <option key={route.tag} value={route.tag}>{route.title}</option>)}
      </select>
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

  return displayedResult;
};

export default RoutesSelect;