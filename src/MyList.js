import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'
import logo from './catcat.gif'


class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))
    
    return (
      <div>
      <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <h1>Things I should stop procrastinating:</h1>
        
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList