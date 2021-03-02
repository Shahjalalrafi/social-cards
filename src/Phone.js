import React from 'react';
import './phone.css'

const Phone = ({type, number}) => {
    return (
        <div className='phone'>
            <p>{type}: {number}</p>
        </div>
    );
};

export default Phone;