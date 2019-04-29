import React, { Component } from 'react';

export default class Cell extends Component {

  state = {
    color: this.props.color
  }

  changeColor = (event) => {
    event.target.style.backgroundColor = this.props.newColor;
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
      </div>
    )
  }

}
