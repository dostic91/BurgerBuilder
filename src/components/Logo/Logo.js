import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import '../../components/Logo/Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo} alt="Burger"/>
    </div>
);

export default logo;