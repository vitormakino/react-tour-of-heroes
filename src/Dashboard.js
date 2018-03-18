import React from 'react';

import './Dashboard.css';

const Dashboard = ({ heroes, onHeroSelect }) => (
  <div className="dashboard">
    <h3>Top Heroes</h3>
    <div className="grid grid-pad">
    {heroes.map(hero => (
      <a href="#" onClick={() => onHeroSelect(hero) } 
         key={hero.id} className="col-1-4">
        <div className="module hero">
        <h4>{hero.name}</h4>
        </div>
      </a>
    ))}
    </div>
  </div>  
);

export default Dashboard;