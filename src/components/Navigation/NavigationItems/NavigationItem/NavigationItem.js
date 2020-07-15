import React from 'react';
import '../NavigationItem/NavigationItem.css';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <div>
        <li className="NavigationItem">
            <a href={props.link}
            className={props.active ? classes.active : null}>{props.children}</a>
        </li>
    </div>
);

export default navigationItem;