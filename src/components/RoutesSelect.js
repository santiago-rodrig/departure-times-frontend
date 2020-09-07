import React from 'react';

const RoutesSelect = ({ routes, route, setRoute, setFetchRouteData }) => {
  let result = undefined;

  const handleChange = (e) => {
    setRoute(e.target.value);
    e.target.value = route;
    setFetchRouteData(true);
  }

  if (routes.status === 'fetching') {
    result = <p>Fetching routes...</p>;
  } else if (routes.status === 'success') {
    result = (
      <select onChange={handleChange} value={route || 'placeholder'}>
        <option value="placeholder">-- Please select a route --</option>
        {routes.value.map(r => <option key={r.tag} value={r.tag}>{r.title}</option>)}
      </select>
    );
  }

  return result;
};

export default RoutesSelect;