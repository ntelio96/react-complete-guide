import React from 'react';

function Card(props) {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;

//rsf
//props.children is used when we want to use element like a sematic for e.g a div, otherwise it won't work!!!