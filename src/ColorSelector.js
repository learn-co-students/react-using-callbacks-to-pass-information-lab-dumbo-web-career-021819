import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.nextStep}/>
    })
  )

  nextStep = (event) => {
    const rgb = event.target.style['background-color'].split(/[(,)]/)
    const rgbToHex = function (rgb) { 
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
           hex = "0" + hex;
      }
      return hex;
    };
    const r = rgbToHex(rgb[1])
    const g = rgbToHex(rgb[2])
    const b = rgbToHex(rgb[3])
    const hex = `#${r}${g}${b}`
    this.props.whatever(hex)
  }
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
