/**
 * Created by lenovo on 2017/8/16.
 */
import React, { Component } from 'react';
import Btn from '../../common/js/button'
import es6Test from '../../common/js/es6Test'
class history extends Component{
    constructor(props){
        super(props)
        this.state={
         name:'shishi',
          arr:[1,2,4]
        }
        this.changeArr=this.changeArr.bind(this)
    }
  componentWillMount() {
    es6Test()
  }
  componentDidMount(){
      //观察子元素的变动
    var callback = function(records){
      records.map(function(record){
        console.log(record)
        console.log('Mutation type: ' + record.type);
        console.log('Mutation target: ' + record.target);
      });
    };
  
    var mo = new MutationObserver(callback);
  
    var option = {
      'childList': true,
      'subtree': true
    };
    mo.observe(document.body, option);
    
  }
  changeArr(){
      let arr=this.state.arr
      arr.push(1)
      this.setState({
        arr,
      })
  }
    render(){
        return (
            <div>
              {/*子组件自定义事件*/}
              <Btn onClick={this.changeArr}/>
              <button onClick={this.changeArr}>点击</button>
              {
                 this.state.arr.map(function (item, i) {
                     return (
                         <li key={i}>
                             <label>{item}</label>
                         </li>
                     );
                 })
              }
            </div>
        )
    }
}

export default history
