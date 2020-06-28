import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  //<Cell />

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
let red = '#F00'
// let blue = '#00F'

let redAry = [ red, red, red, red, red, red, red, red, red, red ]

Matrix.defaultProps = {
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => redAry)
}
