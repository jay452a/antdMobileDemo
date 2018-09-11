/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import style from '@/static/jujia/login.scss';
import { NavBar, Icon,InputItem,List,Toast,Button } from 'antd-mobile';
import api from '@/api/index'

@observer
export default class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }
    componentDidMount () {

    }
    login() {
        const user = this.state.user
        const password = this.state.password
        if(!user) {
            Toast.info('用户名不能为空');
            return
        }
        if(!password) {
            Toast.info('密码不能为空');
            return
        }
        var param = {
            name: user,
            password
        }
        api.login(param).then(res => {
            console.log(res)
            console.log(this.props.store.user)
            this.props.store.saveUser(res.user)
            window.location.replace("#/healthManage");
        },err => {
            Toast.info(err.msg);
        })
    }
    render() {
        return (
            <div className={style.content}>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.go(-1)}
                >用户登陆</NavBar>
                <img src={require('@/static/img/icon/1_02.jpg')}/>
                <List>
                    <InputItem
                        type="text"
                        placeholder="请输入用户名"
                        value={this.state.user}
                        onChange={(event) => this.setState({user:event})}
                    >用户名</InputItem>
                </List>
                <List>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        value={this.state.password}
                        onChange={(event) => this.setState({password:event})}
                    >密码</InputItem>
                </List>
                 <Button type="primary" className={style.loginBtn} onClick = {() => this.login()}>登陆</Button>
            </div>
        );
    }
}


