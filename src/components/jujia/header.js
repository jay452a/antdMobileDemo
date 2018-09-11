/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { observer } from "mobx-react";
import  store from '@/store/index'
import api from '@/api/index'

@observer
export default class tabFooter extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            name: ''
        }
    }
    componentDidMount () {
        console.log(this.props)
        if(!this.props.store.user) {
            api.getUserInfo().then(res => {
                this.setState(
                    {name: res.username}
                )
                this.props.store.saveUser(res)
                console.log(this.props.store)
            },err => {

            })
        }else{
            this.setState(
                {name: this.props.store.user.username}
            )
        }
    }
    render() {
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.close()}
                    rightContent={[
                        <span style={{marginRight:'10px'}} key="0">{this.state.name}</span>,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.props.title}</NavBar>
            </div>
        );
    }
}