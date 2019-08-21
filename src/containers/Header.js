import React from 'react';
import NavLinks from './NavLinks'
import '../styles/Header.css'

const Header = ({ handleCategorySelect }) => {
    return (
        <header className="App-header">
            <h1 id="pageLogo">@ info</h1>

            <NavLinks
                handleCategorySelect={handleCategorySelect}
            />
        </header>
    )
}

export default Header
