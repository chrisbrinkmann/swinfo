import React from 'react';
import SelectList from '../components/SelectList';
import InfoCard from '../components/InfoCard';


// so instead of passing props and then calling props.subject
// we can just destructure props in the arg like this:
const Main = ({ displayCategory, displayItem }) => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-6">
                    <SelectList
                        category={displayCategory}
                    />
                </div>
                <div className="col-sm-6">
                    <InfoCard
                        subject={displayItem}
                    />
                </div>
            </div>
        </main>
    )
}

export default Main