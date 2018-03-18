import React from 'react';

import './Heroes.css';

import Hero from './Hero';

const Heroes = ({ heroes, onHeroSelect }) => (
<div>
    <h2>My Heroes</h2>
    <ul className="heroes">
    {heroes.map(hero=> (
        <Hero key={hero.id}
              {...hero}
              onClick={() => onHeroSelect(hero)}
              />
    ))}

    </ul>
</div>
);


export default Heroes;