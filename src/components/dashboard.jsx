import React from 'react';

export default (props) => (
    <div>
        <h3>{props.id} - {props.name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <strong>Loaded!</strong>
        <span>{props.data.join(', ')}</span>
        <button onClick={props.reload}>Reload!</button>
    </div>
)