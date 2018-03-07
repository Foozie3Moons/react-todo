import React, { Component } from 'react';
import ListItem from './ListItem';
import logo from './logo.svg';
import './App.css';

class MyList extends Component {
  // initializing our component with default values
  constructor(props) {
    // inheriting attributes from the 'component' class
    super()
    // initializing the state with default values
    this.state = {
      toDoItemArray: [],
      currentItem: '',
    }
    // 'this' binding is not necessary if you use => ES6 functions
    // this.clearList = this.clearList.bind(this)
  }

  // this is a "hook" for React, that executes the code within it after the
  // component mounts in the 'virtual DOM'
  componentDidMount() {
    //focus text input upon mounting component
    this.textInput.focus();
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    // checking if currentItem has text
    if (this.state.currentItem !== '') {
      // create a copy
      let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
      // push item to copy
      toDoItemArrayCopy.push(this.state.currentItem)
      // update state with copy
      this.setState({
        toDoItemArray: toDoItemArrayCopy,
        currentItem: ''
      })
    }
    // focus on the text input after adding an item
    this.textInput.focus();
  }

  deleteItem = (e, index) => {
    // create a copy of the state's todo array
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    // remove from the array the index of the item we want to delete
    toDoItemArrayCopy.splice(index, 1)
    // update the state using the copy of the todo array
    this.setState({
      toDoItemArray: toDoItemArrayCopy
    })
  }

  clearList = (e) => {
    // prevent the default submit action (for buttons, there usually is not a default)
    // however, it doesn't hurt to add this in
    e.preventDefault()
    // clear the state's todo array
    this.setState({
      toDoItemArray: []
    })
  }

  render() {
    {/* this console log helped me determine what was happening to the */}
    {/* todoItemArray, since there was some odd behavior and the toDoItemArray was not */}
    {/* an array */}
    {/* console.log(this.state.toDoItemArray, typeof this.state.toDoItemArray) */}

    {/* creating all of our jsx html elements from our state using map */}
    let jsxTodos = this.state.toDoItemArray.map((listItem, index) => {
      return (
        <ListItem
          key={index}
          doThis={listItem}
          {/* passing the index into deleteItem so we can splice the right one */}
          {/* we also need to define (e) because we are adding additional paramaters to deleteItem */}
          deleteItem={(e) => this.deleteItem(e, index)}
        />
      )
    })

    return (
      <div className="App">
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {jsxTodos}
        </ul>
        <input type='text'
          {/* this is storing a reference to the element in 'this', which is referring to the current component */}
          ref={el => {
            this.textInput = el;
          }}
          value={this.state.currentItem} onChange={this.handleChange}
        />
        <br />
        <button onClick={this.addItem}>Add Item</button>
        <br />
        <button onClick={this.clearList}>Finished the List!</button>
      </div>
    );
  }
}

export default MyList;
