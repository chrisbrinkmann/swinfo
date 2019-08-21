import React from 'react';
import Button from '../components/Button'
import '../styles/NavLinks.css'

const NavLinks = ({ handleCategorySelect }) => {
    return (
        <nav>

            <Button
                name={`films`}
                handleCategorySelect={handleCategorySelect}
            />
            <Button
                name={`people`}
                handleCategorySelect={handleCategorySelect}
            />
            <Button
                name={`planets`}
                handleCategorySelect={handleCategorySelect}
            />
            <Button
                name={`species`}
                handleCategorySelect={handleCategorySelect}
            />
            <Button
                name={`vehicles`}
                handleCategorySelect={handleCategorySelect}
            />
            <Button
                name={`starships`}
                handleCategorySelect={handleCategorySelect}
            />

        </nav>
    )
}


export default NavLinks