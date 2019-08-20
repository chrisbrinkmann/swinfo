import React from 'react';
import Button from '../components/Button'
import '../styles/NavLinks.css'

const NavLinks = ( { catSelect }) => {
    return (
        <nav>

            <Button
                name={`Films`}
                catSelect={catSelect}
            />
            <Button
                name={`People`}
                catSelect={catSelect}
            />
            <Button
                name={`Planets`}
                catSelect={catSelect}
            />
            <Button
                name={`Species`}
                catSelect={catSelect}
            />
            <Button
                name={`vehicles`}
                catSelect={catSelect}
            />
            <Button
                name={`Starships`}
                catSelect={catSelect}
            />

        </nav>
    )
}


export default NavLinks