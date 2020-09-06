import React from 'react';

const RoutesSelect = ({ routes, route, handleChange }) => (
  <select value={route.tag} onChange={handleChange}>
    {routes.map(r => <option key={r.tag} value={r.tag}>r.title</option>)}
  </select>
);

export default RoutesSelect;