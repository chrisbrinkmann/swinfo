import React from 'react';
import './Button.css'

const Button = ({ name, catSelect }) => {
    return (
        <button
            className="navButton"
            onClick={() => catSelect(name)}
        >
            {name}
        </button>
    )
}


export default Button
