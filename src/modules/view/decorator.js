import React, { Component } from 'react';
import { observer } from "mobx-react";
import  store  from '@/store/index';
import finger from '@/common/js/finger'
const Time = observer((props) => (
  <div>{props.store.time}</div>

))
@observer class OrderLine extends Component{
  constructor (props) {
    super(props)
    this.state = {
      a1: '1',
      a2: '2'
    }
  }
  componentWillMount() {
  
  }
  componentDidMount () {
    let img = document.getElementById('img')
    let dom = new finger(img)
    let Div = document.getElementById('testDiv')
    dom.princh((k) => {
      this.setState({
        a1: k
      })
    }).tap(() => {
      this.setState({
        a2: 'tap'
      })
    })
  }
  render () {
    return (
      <div>
        <p>a1: ({this.state.a1})</p>
        <p>a2: ({this.state.a2})</p>
        <img src={require('@/static/img/webchat2@3x.png')} style={{'width': '100%'}} id="img"/>
      </div>
    )
  }
}
export default OrderLine