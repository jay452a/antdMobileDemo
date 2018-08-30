/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class tabFooter extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            name: '张三'
        }
    }
    componentDidMount () {
        console.log(this.props)
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