/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import style from '@/static/jujia/healthManage.scss';
import TabFoot from '@/components/jujia/tabFooter'
console.log(style, 1)

export default class HeathManage extends React.Component {
    constructor (props) {
        super(props)
    }
    componentDidMount () {

    }
    render() {
        return (
            <div className={style.content}>
                index
                <TabFoot active="1"></TabFoot>
            </div>
        );
    }
}


