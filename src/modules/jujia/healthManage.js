/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import style from '@/static/jujia/healthManage.scss';
import TabFoot from '@/components/jujia/tabFooter'
import Header from '@/components/jujia/header'
import {connect} from 'react-redux'
import {addTodo,testdo} from '../../action'
console.log(style, 1)

class HeathManage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            projectArr: [
                {name: '体温', icon: require('@/static/img/icon/体温.png'),path:''},
                {name: '血压', icon: require('@/static/img/icon/血压.png'),path:''},
                {name: '血糖', icon: require('@/static/img/icon/血糖.png'),path:''},
                {name: '血氧', icon: require('@/static/img/icon/血氧.png'),path:''},
                {name: '脉搏/心率', icon: require('@/static/img/icon/heartPulse.png'),path:''},
                {name: '心电', icon: require('@/static/img/icon/心电.png'),path:''},
                {name: '身高体重', icon: require('@/static/img/icon/bmi.png'),path:''},
                {name: '尿常规', icon: require('@/static/img/icon/尿常规.png'),path:''},
                {name: '血常规', icon: require('@/static/img/icon/血常规.png'),path:''},
            ]
        }
    }
    componentDidMount () {

    }
    toDeatail(path) {
        console.log(path)
    }
    render() {
        return (
            <div className={style.content}>
                <Header title="健康管理" store={store.jujia}></Header>
                <img src={require('@/static/img/icon/1_02.jpg')}/>
                <ul className={style.flexUl}>
                    {
                        this.state.projectArr.map((res,index) => {
                            return (
                                <li key={index}><img src={res.icon} onClick={() => this.toDeatail(res.path)}/><p>{res.name}</p></li>
                            )
                        })
                    }
                </ul>
                <p>test的state为{this.props.test.state}</p>
               <TabFoot active="2"></TabFoot>
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
export default connect(mapStateToProps, mapDispatchToProps)(HeathManage)