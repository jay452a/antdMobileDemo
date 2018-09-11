/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import style from '@/static/jujia/youxianOlderServe.scss';
import TabFoot from '@/components/jujia/tabFooter'
import Header from '@/components/jujia/header'
import { connect } from 'react-redux'
import {addTodo,testdo} from '../../action'
var i =0
class youxianOldServe extends Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
       this.props.addTodo(2,'hehe')
       console.log(this.props.todos, 'old')
       console.log(this.props.test.state, 'old2')
    }
    changeTest() {
        i++
        this.props.testdo(i)
    }
    render() {
        return (
            <div className={style.content}>
                <Header title="游仙养老" store={store.jujia}></Header>
                <img src={require('@/static/img/icon/1_02.jpg')}/>
                {/*<TabFoot active="1"></TabFoot>*/}
                <button onClick={()=> {this.changeTest()}}>点击</button>
                <p>test的state为{this.props.test.state}</p>
                <TabFoot active="1"></TabFoot>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todos: state.todos,
        test:state.test
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addTodo: (...state) => dispatch(addTodo(...state)),
        testdo: (...state) => dispatch(testdo(...state))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(youxianOldServe)
