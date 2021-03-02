import React from 'react';

const Decrease = (props) => {
    return (
        <div>
            <button onClick={props.decreaseCount}>decrease</button>
        </div>
    );
};

export default Decrease;