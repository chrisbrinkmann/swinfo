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
        this.setState({ categorySelect: name }); //may need to change this
        console.log(this.state.categorySelect)
    }

    // once the page renders, fetch the data from swapi.co
    async componentDidMount() {
        const resp = await fetch("https://swapi.co/api/people/2/")
        const person1 = await resp.json()
        console.log(person1)
        this.setState({test: person1})
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
