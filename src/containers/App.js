import React, { Component } from 'react';
import SelectList from '../components/SelectList';
import InfoCard from '../components/InfoCard';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


class App extends Component {
    constructor() {
        super()
        this.state = {
            categorySelect: '',
            itemSelect: '',

            selectList: {},
            displaySubject: {},
            test: {}
        }

    }

    // handler for when user selects category via nav button
    // app -> header -> navlinks -> button
    onCategorySelect = name => {
        this.setState({categorySelect: name});
        // always displays previous state; because async? need to fix or no?
    }

    // once the page renders
    async componentDidMount() {

    }

    // after state is set
    async componentDidUpdate() {
                console.log(this.state.categorySelect)
                const resp = await fetch(this.state.categorySelect)
                const itemList = await resp.json()
                console.log(itemList)
    }

    render() {

        const {itemSelect, categorySelect, test} = this.state;

        return (
            <div className="App">
                {/* pass the onCategorySelect handler function 
                down thru header to button */}
                <Header
                    catSelect={this.onCategorySelect}
                />

                <Main
                    displayCategory={categorySelect}
                    displayItem={test} // change this to itemSelect
                />

                <Footer />
            </div>
        );
    }
}

export default App;
