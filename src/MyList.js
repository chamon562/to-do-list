import React, { Component } from "react";
import "./App.css";
import ListItem from "./ListItem";
import logo from "./catcat.gif";

// class MyList extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       toDoItemArray: props.theList,
//     };
//   }

//   clearList (e) {
//     console.log("Clearing list!")
//     this.setState({
//       toDoItemArray: []
//     })
//   }
//   render() {
//     let todoItems = this.props.theList.map((item, index) => (
//       <ListItem doThis={item} key={index} />
//     ));

//     return (
//       <div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <h1>Things I should stop procrastinating:</h1>

//         <ul>{todoItems}</ul>
//         <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
//       </div>
//     );
//   }
// }

class MyList extends Component {
  constructor(props) {
    super();
    this.state = {
      toDoItemArray: props.theList,
      newItem: "",
    };
  }

  clearList(e) {
    console.log("Clear List!");
    this.setState({
      // grab the toDoItemArray and make it empty
      toDoItemArray: [],
    });
  }
// whenever inside of the input change we just want to update the stwte evert time
// if we type each letter this function will run all the time
// setting new state of item to e.target.value
  newItemChange(e) {
    // set the new state to e.target.value
    // pass new object
    // new value of newItem is e.target.value
    this.setState({
      newItem: e.target.value,
    });
  }

  addItem(e) {
    console.log("add Item!");
    console.log("Before setState of newItem", this.state.newItem);
    // prevent the event from running the default "submit" event.
    // anytime adding new item do e.preventDefault method
    e.preventDefault();
    // set up a variable new array will the state of the new array

    const newArray = this.state.toDoItemArray;
    // added this.state.newitem to this new array

    newArray.push(this.state.newItem);
    this.setState({
      toDoItemArray: newArray,
      // with newitem set back to empty string
      newItem: "",
    });
    setTimeout(
      console.log("After setState of newItem", this.state.newItem),
      1000
    );
    // cant say new array set equal to the current stte then you can push items into thearray and that equal to the array
    // this.state.toDoItemArray.push(item)
    // then the rest of your code.
    // ...
  }
  // We'll need to make a copy of toDoItemArray,
  // push the newItem, set state and finally clear newItem.

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ));

    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Things I should stop procrastinating:</h1>
        <ul>{todoItems}</ul>
        <form>
          <input
            type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          {/* button using addItem that we made */}
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        {/* pass in e for event run this.clearList and pass in the event e  */}
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
