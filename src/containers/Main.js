import React from 'react';
import ItemList from '../components/ItemList';
import InfoCard from '../components/InfoCard';

const Main = ({ itemList, selectedItem, handleItemSelect }) => {
    
    
    
    return (
        <main className="container-fluid row">
           
                <div className="col-md-6">
                    <ItemList
                        itemList={itemList}
                        handleItemSelect={handleItemSelect}
                    />
                </div>
                <div className="col-md-6">
                    <InfoCard
                        selectedItem={selectedItem}
                    />
                </div>
            
        </main>
    )
}

export default Main