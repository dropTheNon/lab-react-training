import React from 'react';

const Random = (props) => {
    return (
        <div>
            <p>{
                Math.floor(Math.random() * (props.max - props.min) + props.min)
            }</p>
        </div>
    )
}

export default Random;