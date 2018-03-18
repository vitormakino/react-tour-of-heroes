import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const Hero = ({ id, name, isSelected, onClick }) => (
    <li className={classNames({'selected': isSelected})} 
        onClick={onClick}>
        <span className="badge">{id}</span> {name}
    </li>
);

Hero.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};

export default Hero;