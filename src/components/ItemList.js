import React from 'react';
import '../styles/ItemList.css'

const ItemList = ({ itemList, handleItemSelect }) => {

    return !itemList.length ?
        <div></div> :

        (
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
    )

}

export default ItemList;