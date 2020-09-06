import React from 'react';
import RoutesSelect from './RoutesSelect';

const Dashboard = ({ routes }) => (
  <div id="dashboard">
    <RoutesSelect routes={routes} />
  </div>
);

export default Dashboard;