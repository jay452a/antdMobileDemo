/**
 * Created by lenovo on 2018/1/5.
 */
import React, { Component } from 'react';
var d3 = require('d3')
export default class d3Test extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount () {
    var div = d3.selectAll('#d3Container');
    var update = div.data([1,2,3]) // 填充数据
    var enter = update.enter() // enter是数据多余，用append处理
    var exit = update.exit()  //exit是div多余，用删除处理
    console.log(enter, 1)
    update.text((d) => {
      return d
    })
    enter.append('p').text((d) => {
      return d
    })
    exit.remove()
  }
  render () {
    return (
      <div id="d3Container">d3</div>
    )
  }
}