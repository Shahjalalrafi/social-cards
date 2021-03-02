import React from 'react';

const StartTimmer = (props) => {
    return (
        <div>
            <button onClick={props.stop}>start</button>
        </div>
    );
};

export default StartTimmer;