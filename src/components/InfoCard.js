import React from 'react';

const InfoCard = ({ subject }) => {

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/1?200x200`} />
            <div>
                <p>{subject.name}</p>
                <p>{subject.birth_year}</p>
                <p>{subject.birth_year}</p>
            </div>
        </div>
    )
    
}

export default InfoCard;