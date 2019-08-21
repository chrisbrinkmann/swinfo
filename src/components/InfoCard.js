import React from 'react';
import '../styles/InfoCard.css'

const InfoCard = ({ subject }) => {

    return (
        <div className='dib br3 pa3 grow tc bw2 shadow-5 infoCard'>
            <img alt='robot' src={`https://robohash.org/1?200x200`} />
            <div>
                <p>{subject.name}</p>
                <p>{subject.birth_year}</p>

            </div>
        </div>
    )
}

export default InfoCard;