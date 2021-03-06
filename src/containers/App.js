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
    this.setState({ selectedItem: {} })
        
    try {
      let dataList = []

      // cache the first page of data from the API
      let resp = await fetch(url)
      let data = await resp.json()
      dataList = dataList.concat(data.results)

      // cache the rest of the pages if there are more
      while (data.next !== null) {

      // for some reason their pagination urls in next use http
      // just replace it with https until they fix it
      let httpsNext = data.next.replace('http://', 'https://')

      resp = await fetch(httpsNext)
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
