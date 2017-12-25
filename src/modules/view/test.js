/**
 * Created by lenovo on 2017/12/20.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import testTyle from '@/static/view/test';
console.log(testTyle, 1)
const AllNum = observer((props) => <div>num1 + num2 = {props.store.total}</div>);

const Main = observer((props) => (
  <div>
    <p className= {testTyle.test}>num1 = {props.store.num1}</p>
    <p>num2 = {props.store.num2}</p>
    <div>
      <button onClick={props.store.addNum1}>num1 + 1</button>
      <button onClick={props.store.addNum2}>num2 + 1</button>
    </div>
    <p>time: {props.store2.time}</p>
  </div>
));

const Time = observer((props) => (
  <div>{props.store.time}<button onClick={props.store.setTime}>计时</button></div>
  
))
export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Main store={store.newState} store2={store.Timeer} />
        <AllNum store={store.newState} />
        <Time store={store.Timeer}/>
      </div>
    );
  }
}


