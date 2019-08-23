import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'

class App extends Component {
    constructor() {
        super()
        this.state = {
            itemList: [],
            selectedItem: {},
            isLoading: false
        }

        this.handleCategorySelect = this.handleCategorySelect.bind(this)
        this.handleItemSelect = this.handleItemSelect.bind(this)
    }

    // onClick handler called from Button.js
    async handleCategorySelect(url) {
        this.setState({ isLoading: true })
        
        try {
            let dataList = []

            // cache the first page of data from the API
            let resp = await fetch(url)
            let data = await resp.json()
            dataList = dataList.concat(data.results)

            // cache the rest of the pages if there are more
            while (data.next !== null) {
                resp = await fetch(data.next)
                data = await resp.json()
                dataList = dataList.concat(data.results)
            }

            this.setState({ itemList: dataList })
        } catch (err) {
            console.log('Big error', err)
        }

        this.setState({ isLoading: false })
    }

    // onClick handler called from ItemList.js
    handleItemSelect = item => {
        this.setState({ selectedItem: item })
    }

    async componentDidUpdate() {
        console.log(this.state.itemList)
        console.log(this.state.selectedItem)
    }

    render() {

        const { itemList, selectedItem, isLoading } = this.state

        return (
            <div>
                <Header handleCategorySelect={this.handleCategorySelect}/>

                <Main
                    itemList={itemList}

                    isLoading={isLoading}
                    
                    selectedItem={selectedItem}

                    handleItemSelect={this.handleItemSelect}
                />
            </div>
        );
    }
}

export default App;
