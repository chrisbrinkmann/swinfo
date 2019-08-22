import React from 'react';
import '../styles/InfoCard.css'

const InfoCard = ({ selectedItem }) => {

    const itemInfo = Object.entries(selectedItem)


    return Object.entries(selectedItem).length === 0 ?
    
        <div></div> :

    (
        <div className='shadow-5 infoCard'>
            <img alt='robot' src={`https://robohash.org/1?100x100`} />
                {       
                    itemInfo.map((entry, index) => {
                        return (
                            <div
                                key={index}
                            >
                                {entry[0]}: {entry[1]}
                            </div>
                        )
                })       
            }
        </div>
    )
}

export default InfoCard;