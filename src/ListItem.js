import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.doThis}
        <button onClick={this.props.deleteItem}>x</button>
      </li>
    );
  }
}

export default ListItem;
