import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  updateColor = () => {
    console.log('no')
    this.setState({color: this.props.passColor()})
  }
  
  render() {
    return (
      <div className="cell" 
      onClick={this.updateColor}
      style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
