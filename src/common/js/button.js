/**
 * Created by lenovo on 2017/9/11.
 */
import React, { Component } from 'react';
class Btn extends Component{
  constructor(props){
     super(props)
  }
  componentWillMount() {
    console.log(this.props.onClick)
  }
  render () {
    return (
      <button onClick={this.props.onClick}>按钮</button>
      )
    
  }
}

export default Btn
