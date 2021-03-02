import React from 'react';
import classes from './button.module.css'
// import './button.module.css'

const Increase = (props) => {
    return (
        <div>
            <button className={classes.button} onClick={props.addCount}>increase</button>
        </div>
    );
};

export default Increase;