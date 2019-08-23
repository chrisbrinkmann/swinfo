import React from 'react';
import '../styles/InfoCard.css'

const InfoCard = ({ selectedItem }) => {

    const itemInfo = Object.entries(selectedItem)

    return itemInfo.length === 0 ?
    
        <div></div> :

    (
            <div className='shadow-5 infoCard'>
                {/* random robot image placeholder */}
                <img alt='robot' src={`https://robohash.org/${Math.random()}?100x100`} />
            {       
                    itemInfo
                        // filter removes entries that are arrays/metadata for readability
                        .filter(elem =>
                            !Array.isArray(elem[1]) &&
                            elem[0] !== 'url' &&
                            elem[0] !== 'homeworld' &&
                            elem[0] !== 'created' &&
                            elem[0] !== 'edited')
                        // render the remaining entries in the card
                        .map((elem, index) => {
                        return (
                            <div
                                key={index}
                            >
                            <span className='infoKey'>{elem[0]}:</span> {elem[1]}
                            </div>
                        )
                })       
            }
        </div>
    )
}

export default InfoCard;