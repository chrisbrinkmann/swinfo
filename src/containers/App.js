import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'

class App extends Component {
    constructor() {
        super()
        this.state = {
            itemList: [],
            selectedItem: {}
        }

        this.handleCategorySelect = this.handleCategorySelect.bind(this)
        this.handleItemSelect = this.handleItemSelect.bind(this)
    }

    // onClick handler called from Button.js
    async handleCategorySelect(url) {
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            this.setState({ itemList: data.results })
        } catch (err) {
            console.log('Big error', err)
        }
    }

    // onClick handler called from ItemList.js
    handleItemSelect = item => {
        this.setState({ selectedItem: item })
    }
    
    async componentDidUpdate() {
        console.log(this.state.selectedItem)
    }

    render() {

        const { itemList, selectedItem } = this.state

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
