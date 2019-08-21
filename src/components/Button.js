import React from 'react';
import '../styles/Button.css'

const Button = ({ name, handleCategorySelect }) => {
    return (
        <button
            className="navButton"
            onClick = {
                () => handleCategorySelect(`https://swapi.co/api/${name}/`)
            }
        >
            {name}
        </button>
    )
}


export default Button
