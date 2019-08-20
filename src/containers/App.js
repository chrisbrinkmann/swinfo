import React, { Component } from 'react';
import SelectList from '../components/SelectList';
import InfoCard from '../components/InfoCard';
import './App.css';

class App extends Component {
    constructor(){
        super()

        this.state = {
            categorySelect: '',
            itemSelect: '',

            selectList: {},
            displaySubject: {},
            test: {}
        }

    }



    async componentDidMount() {
        const resp = await fetch("https://swapi.co/api/people/1/")
        const person1 = await resp.json()
        console.log(person1)
        this.setState({ test: person1 }) // why is destructuring needed here?
    }
  
    render() {
      
        const { itemSelect, categorySelect, test } = this.state;

    return(
    <div className="App">
            <header className="App-header"> 
                <h1 className="align-self-center">@</h1>
            
                <button class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black m2" href="#0">Films</button>
                <a class="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black" href="#0">People</a>
            </header>

<div className="container">
    <div className="row">
        <div className="col-sm-6">
            <SelectList category={categorySelect} />
        </div>
        <div className="col-sm-6"> 
            <InfoCard subject={test} />
        </div>
        </div>
    </div>
</div>
  );
}
}
    
export default App;
