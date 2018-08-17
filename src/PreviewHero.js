import React from 'react';

import { Link } from 'react-router-dom';

const PreviewHero = ({id, name}) => (
    <div>
        <h2>{name} is my hero</h2>
        <Link to={'/details/'+id}>
          View details
        </Link>
    </div>
);

export default PreviewHero;