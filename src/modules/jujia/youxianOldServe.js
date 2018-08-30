/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import style from '@/static/jujia/youxianOlderServe.scss';
import TabFoot from '@/components/jujia/tabFooter'
import Header from '@/components/jujia/header'

export default class HeathManage extends React.Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {

    }
    render() {
        return (
            <div className={style.content}>
                <Header title="游仙养老"></Header>
                <img src={require('@/static/img/icon/1_02.jpg')}/>
                <TabFoot active="1"></TabFoot>
            </div>
        );
    }
}


