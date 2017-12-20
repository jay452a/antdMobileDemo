import React, { Component } from 'react';
import {  computed, action ,observable} from "mobx";
import { observer } from "mobx-react";

class Ticker {
  @observable tick = 0
  
  @action.bound
  increment() {
    this.tick++ // 'this' 永远都是正确的
  }
}

const ticker = new Ticker()
setInterval(ticker.increment, 1000)

@observer class OrderLine extends Component{
  @observable price = 1;
  @observable amount = 2;
  @computed get total() {
    return this.price * this.amount;
  }
  @observable secondsPassed = 0
  
  componentWillMount() {
    setInterval(() => {
      this.secondsPassed++
    }, 1000)
  }
  
  render () {
    return (
      <div>decorator{this.total}
      <p>{this.secondsPassed  }</p>
      <p>{ticker.tick  }</p>
      </div>
    )
  }
}
export default OrderLine