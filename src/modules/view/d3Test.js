/**
 * Created by lenovo on 2018/1/5.
 */
import React, { Component } from 'react';
import column from '@/common/d3Paint/column.js'
var d3 = require('d3')
export default class d3Test extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataRect: [20,15,60,47,25,69]
    }
    this.addRectData = this.addRectData.bind(this)
  }
  addRectData () {
  }
  componentDidMount () {
    column(d3, '#svgArea',this.state.dataRect)
  }
  render () {
    return (
      <div id="d3Container">
        <button onClick={this.addRectData}>add</button>
        <svg id="svgArea" style={{'margin':'auto','display':'block'}}></svg>
      </div>
    )
  }
}