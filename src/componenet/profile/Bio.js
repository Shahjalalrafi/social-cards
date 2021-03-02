import React from 'react';

const Bio = (props) => {
    return (
        <div>
            <div className='bio'>
                <h1>{props.name}</h1>
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default Bio;