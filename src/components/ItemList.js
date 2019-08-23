import React from 'react';
import '../styles/ItemList.css'

const ItemList = ({ itemList, handleItemSelect, isLoading }) => {

    return isLoading ?
        <div className="itemList loading">Loading...</div> :

        // default display nothing
        !itemList.length ?
        <div></div> :
        
        // display itemlist once it has items from fetch
        <div className="itemList">
            <ul>
                {
                    itemList.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => handleItemSelect(item)}
                            >
                                {item.title || item.name.toLowerCase()}
                            </li>
                        )   
                    })
                }
            </ul>
        </div>
}

export default ItemList;