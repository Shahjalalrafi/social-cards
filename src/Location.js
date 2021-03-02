import React from 'react';
import './location.css'

const Location = (props) => {
    return (
        <div className='location'>
            <p>{props.location.street.number}, {props.location.street.name}</p>
            <p>{props.location.city}</p>
            <p>{props.location.state}</p>
            <p>{props.location.postcode}</p>
            <p>{props.location.country}</p>
        </div>
    );
};

export default Location;