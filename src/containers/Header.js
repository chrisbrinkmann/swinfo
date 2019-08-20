import React from 'react';
import NavLinks from './NavLinks'
import '../styles/Header.css'

const Header = ({ catSelect }) => {
    return (
        <header className="App-header">
            <h1 id="pageLogo">@ info</h1>

            <NavLinks
                catSelect={catSelect}
            />
        </header>
    )
}

export default Header
