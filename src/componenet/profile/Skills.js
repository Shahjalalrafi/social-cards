import React from 'react';

const Skills = (props) => {
    return (
        <div>
            <div className='skills'>
                <h3>skills:</h3>
                <ul>
                    <li>{props.skillA}</li>
                    <li>{props.skillB}</li>
                    <li>{props.skillC}</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;