import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.doThis}
        {/* we need to pass deleteItem as props from the MyList component because deleteItem is */}
        {/* affecting the state of MyList, and nested components cannot send data back up to the parent */}
        {/* component. The way to send data back, is to have the parent send a function to the component */}
        {/* that returns some value on an event, like we se here */}
        <button onClick={this.props.deleteItem}>x</button>
      </li>
    );
  }
}

export default ListItem;
