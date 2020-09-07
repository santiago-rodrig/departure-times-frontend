import React from 'react';

const DirectionsSelect = ({ routeData, setDirection, direction }) => {
  const prepareRouteData = routeData => {
    const directions = routeData.directions.map(d => ({ tag: d.tag, title: d.title }));

    return directions.map(d => <option key={d.tag} value={d.tag}>{d.title}</option>);
  }

  const handleChange = (e) => {
    setDirection(e.target.value);
    e.target.value = direction;
  }

  let result = undefined;

  if (routeData) {
    result = (
      <select value={direction || 'placeholder'} onChange={handleChange}>
        <option value="placeholder">-- Please select a direction --</option>
        {prepareRouteData(routeData)}
      </select>
    );
  } else {
    result = <p>Fetching route data...</p>;
  }

  return result;
};

export default DirectionsSelect;