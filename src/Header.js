import React from 'react';
import logo from './images/logo.png';

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo hvr-bounce-in" alt="logo" title="show/hide instructions"/>
            <h1 className="App-title">Clicky Game</h1>
            <p className="App-score">Score: {props.score}</p>
            <p className="ApIp-intro">Click an image to gain a point.<br/>
                Do not click an image more than once though or you will have to start over!</p>
        </header>
    );
};

export default Header;