import React from 'react';
import './ItemList.css';

const item = (props) => (
    <div className="item" onClick={props.clicked}>
    <h1>{props.name}</h1>
    </div>
);

export default item;