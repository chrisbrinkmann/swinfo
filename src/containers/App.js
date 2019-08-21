import React, {Component} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
    constructor() {
        super()
        this.state = {
            categoryUrl: '',
            categoryList: [],
            itemSelect: '',

            selectList: {},
            displaySubject: {},
            test: {}
        }

    }

    handleCategorySelect = url => {
        this.setState({ categoryUrl: url }); //async, may not be instant
    }

    // once the page renders
    async componentDidMount() {

    }

    // after state is set
    async componentDidUpdate() {
        console.log(this.state.categoryUrl)
        const resp = await fetch(this.state.categoryUrl)
        const itemList = await resp.json()
        console.log(itemList)
        console.log(itemList.results[0].name || itemList.results[0].title)
    }

    render() {

        const {itemSelect, categoryUrl, test} = this.state;

        return (
            <div>

                <Header catSelect={this.handleCategorySelect}/>

                <Main
                    displayCategory={categoryUrl}
                    
                    displayItem={test} // change this to itemSelect
                />

                <Footer/>
            </div>
        );
    }
}

export default App;
