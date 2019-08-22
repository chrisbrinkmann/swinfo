import React from 'react';
import '../styles/ItemList.css'

const ItemList = ({ itemList, handleItemSelect }) => {

    // arr is for demo only; replace with itemList
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    

    return (
        
        <div className="itemList">
            <ul>
                {
                    itemList.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => handleItemSelect(item)}
                            >
                                {item.name || item.title}
                            </li>
                        )   
                    })
                }
            </ul>
        </div>
    )

}

export default ItemList;