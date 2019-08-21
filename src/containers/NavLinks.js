import React from 'react';
import Button from '../components/Button'
import '../styles/NavLinks.css'

const NavLinks = ( { catSelect }) => {
    return (
        <nav>

            <Button
                name={`films`}
                catSelect={catSelect}
            />
            <Button
                name={`people`}
                catSelect={catSelect}
            />
            <Button
                name={`planets`}
                catSelect={catSelect}
            />
            <Button
                name={`species`}
                catSelect={catSelect}
            />
            <Button
                name={`vehicles`}
                catSelect={catSelect}
            />
            <Button
                name={`starships`}
                catSelect={catSelect}
            />

        </nav>
    )
}


export default NavLinks