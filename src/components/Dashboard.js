import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoutes, populateAsync } from '../app/states/routes/routesSlice';
import RoutesSelect from './RoutesSelect';
import DirectionsSelect from './DirectionsSelect';
import styles from './styles/Dashboard.module.css';

const apiURL = tag => `https://srodrig-departure-time-api.herokuapp.com/api/v1/route_details?route_tag=${tag}`;

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const routes = useSelector(selectRoutes);
  const dispatch = useDispatch();
  const [fetchRouteData, setFetchRouteData] = useState(false);
  const [routeData, setRouteData] = useState(null);
  const [direction, setDirection] = useState(null);
  let result = undefined;

  // Callback for fetching the routes
  const fetchRoutes = useCallback(() => {
    dispatch(populateAsync());
  }, [dispatch]);

  const fetchRouteDataCallback = useCallback(() => {
    fetch(
      apiURL(selectedRoute),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': '*/*',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setRouteData(data);
        setFetchRouteData(false);
      });
  }, [setFetchRouteData, selectedRoute, setRouteData]);

  // This effects only is executed once
  useEffect(() => {
    fetchRoutes();
  }, [fetchRoutes]);

  useEffect(() => {
    if (fetchRouteData) {
      fetchRouteDataCallback();
    }
  }, [fetchRouteData, fetchRouteDataCallback]);

  if (routes.status !== 'failure') {
    if (!selectedRoute) {
      result = (
        <div className={styles.dashboard}>
          <RoutesSelect
            routes={routes}
            route={selectedRoute}
            setRoute={setSelectedRoute}
            setFetchRouteData={setFetchRouteData}
          />
        </div>
      );
    } else {
      result = (
        <div className={styles.dashboard}>
          <RoutesSelect
            routes={routes}
            route={selectedRoute}
            setRoute={setSelectedRoute}
            setFetchRouteData={setFetchRouteData}
          />
          <DirectionsSelect
            routeData={routeData}
            direction={direction}
            setDirection={setDirection}
          />
        </div>
      );
    }
  } else {
    result = <p>Not OK</p>;
  }

  return result;
};

export default Dashboard;