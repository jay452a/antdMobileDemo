/**
 * Created by lenovo on 2018/1/5.
 */
import React, { Component } from 'react';
import column from '@/common/d3Paint/column.js'
var d3 = require('d3')
export default class d3Test extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount () {
    var div = d3.selectAll('p')
    var update = div.data([1,2,3]) // 填充数据
    var enter = update.enter() // enter是数据多余，用append处理
    var exit = update.exit()  //exit是div多余，用删除处理
    console.log(enter, 1)
    update.text((d) => {
      return d
    })
    enter.append('p').html((d) => {
      return d
    })
    exit.remove()
    column(d3, '#svgArea',[20,15,60,47,25,69])
    
  }
  render () {
    return (
      <div id="d3Container">
        <p></p>
        <div id="svgArea" style={{'textAlign':'center'}}></div>
      </div>
    )
  }
}