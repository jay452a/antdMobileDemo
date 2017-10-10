/**
 * Created by lenovo on 2017/8/16.
 */
import React, { Component } from 'react';
import Btn from '../../common/js/button'
import es6Test from '../../common/js/es6Test'
import  openApp1  from '../../common/js/openApp'
import '../../static/css/learnCSS.css'
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
            <div className="hiscontent">
              {/*子组件自定义事件*/}
              <div className="inner1">
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
                <h3>背景与边框</h3>
                <div className="halfTransparentBorder">半透明边框</div>
                <div className="mutipleBorder">多重边框boxshadow方案</div>
                <div className="mutipleBorderOutline">多重边框outline方案</div>
                <div className="backPosition">背景定位</div>
                <div className="backGradientH">水平条纹</div>
                <div className="backGradientV">竖直条纹</div>
                <div className="backGradientX">斜向条纹</div>
                <div className="backGradientXRepeat">斜向条纹2</div>
                <div className="marching-ants"></div>
                <h3>形状</h3>
                <div className="tuoyuan">糖糖</div>
                <div className="parallelogram"></div>
                <div className="lingxingPic" alt="菱形图片">
                  <img src={require('@/static/img/downappurl@3x.png')} alt="clip-path实现菱形图片"id="openAppAndrow"/>
                </div>
                
                <h3 className="animationPrintWord">动态打字，试试</h3>
              </div>
              <div className="inner2">
                 <p>第二部分</p>
                 <a href="taobao://" id="openApp"
                    style= {{color : "#000",borderBottom : "solid 2px #373F42" }}>贴吧客户端</a>
              </div>
            </div>
        )
    }
}

export default history
