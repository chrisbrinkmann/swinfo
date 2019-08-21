import React, {Component} from 'react';
import Header from './Header'
import Main from './Main'

class App extends Component {
    constructor() {
        super()
        this.state = {
            categoryUrl: '',
            itemList: [],
            selectedItem: {}
        }

    }

    // onClick handler called from Button.js
    handleCategorySelect = url => {
        this.setState({ categoryUrl: url });
    }

    // onClick handler called from ItemList.js
    handleItemSelect = item => {
        this.setState({ selectedItem: item });
    }

    async componentDidUpdate() {
        const resp = await fetch(this.state.categoryUrl)
        const data = await resp.json()
        console.log(data)
    }

    render() {

        const { itemList, selectedItem } = this.state;

        return (
            <div>
                <Header handleCategorySelect={this.handleCategorySelect}/>

                <Main
                    itemList={itemList}
                    
                    selectedItem={selectedItem}

                    handleItemSelect={this.handleItemSelect}
                />
            </div>
        );
    }
}

export default App;
