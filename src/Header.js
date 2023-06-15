import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="header">
            <h1><a href="/">TEST</a></h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    {/*<li><a href="pages/about">About</a></li>*/}
                    {/*<li><a href="pages/signup">Sign Up</a></li>*/}
                </ul>
            </nav>
        </header>
    );
}

export default Header;