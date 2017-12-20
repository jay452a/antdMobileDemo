import React, { Component } from 'react';
import { observer } from "mobx-react";
import  store  from '@/store/number'
const Time = observer((props) => (
  <div>{props.store.time}</div>

))
@observer class OrderLine extends Component{
  componentWillMount() {
  
  }
  render () {
    return (
      <div>
      <p>decorator</p>
        <Time store = {store.Timeer}></Time>
      </div>
    )
  }
}
export default OrderLine