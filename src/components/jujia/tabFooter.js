/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Link } from "react-router-dom";
import className from '@/static/base/base.scss'
const style = {
    flexItem: {
        textAlign: 'center',
        padding: '10px 0'
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex:10,
        width: '100%',
        background: 'white'
    }
}
export default class tabFooter extends React.Component{
    constructor (props) {
        super(props)
    }
    componentDidMount () {
      console.log(this.props)
    }
    render() {
        return(
            <div style={style.footer}>
                <Flex align="center">
                    <Flex.Item style={style.flexItem}>
                        <Link to={`/index`} className={this.props.active==='1'?className.active:''}>
                            游仙养老
                        </Link>
                    </Flex.Item>
                    <Flex.Item style={style.flexItem}>
                        <Link to={`/healthManage`}  className={this.props.active==='2'?className.active:''}>
                        健康管理
                        </Link>
                    </Flex.Item>
                    <Flex.Item style={style.flexItem}>
                        <Link to={`/personCenter`} className={this.props.active==='3'?className.active:''}>
                        个人中心
                        </Link>
                    </Flex.Item>
                </Flex>
            </div>
        );
    }
}