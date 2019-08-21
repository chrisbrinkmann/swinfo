import React from 'react';
import '../styles/Button.css'

const Button = ({ name, catSelect }) => {
    return (
        <button
            className="navButton"
            onClick = {
                () => catSelect(`https://swapi.co/api/${name}/`)
            }
        >
            {name}
        </button>
    )
}


export default Button