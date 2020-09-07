import React from 'react';

const RoutesSelect = ({ routes, route, handleChange }) => (
  <select onChange={handleChange} placeholder="Please select a route">
    {routes.map(r => <option key={r.tag} value={r.tag}>r.title</option>)}
  </select>
);

export default RoutesSelect;