/**
 * Created by lenovo on 2017/12/20.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import testTyle from '@/static/view/test';
import testHanshu from '@/common/js/testHanshu.js'
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
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    console.log(testHanshu(), 2)
    // 函数式编程，只关心传进去的参数，而不改变参数本身，最后得到一个结果
    var arr = [1,2,3,1]
    var arr2  = testHanshu.duplicate(arr)
    console.log(arr, arr2)
   
  }
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


