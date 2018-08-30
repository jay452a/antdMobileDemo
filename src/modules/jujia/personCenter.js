/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import TabFoot from '@/components/jujia/tabFooter'
import style from '@/static/jujia/personCenter'
import { Flex } from 'antd-mobile';
import { observer } from "mobx-react";
import api from '@/api/index'

@observer
export default class PersonCenter extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            user:''
        }
    }
    componentDidMount () {
      if(!this.props.store.user) {
          api.getUserInfo().then(res => {
              this.setState(
                  {user: res}
              )
              this.props.store.saveUser(res)
              console.log(this.props.store)
          },err => {
              window.location.href = '#/login'
          })
      }else{
          this.setState(
              {user: this.props.store.user}
          )
      }
    }

    render() {
        return (
            <div>
                <div className={style.top}>
                    <div className={style.item}>
                        <img src={require('@/static/img/icon/grxx.png')} />
                        <p>{this.state.user.username}</p>
                    </div>
                </div>
                <div className={style.myOrder}>
                    <h3>
                        <span>我的订单</span>
                        <span><label>查看全部订单</label></span>
                    </h3>
                    <Flex className={style.orderStatus}>
                        <Flex.Item className={style.orderFlexItem}>
                            <img src={require('@/static/img/icon/yxd.png')}/>
                            <p>已下单</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={require('@/static/img/icon/yfp.png')}/>
                            <p>已分派</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={require('@/static/img/icon/dpj.png')}/>
                            <p>待评价</p>
                        </Flex.Item>
                        <Flex.Item>
                            <img src={require('@/static/img/icon/ywc.png')}/>
                            <p>已完成</p>
                        </Flex.Item>
                    </Flex>
                </div>
                <ul className={style.myInfo}>
                    <li>
                        <img src={require('@/static/img/icon/grxx.png')} />
                        <p>个人信息</p>
                    </li>
                </ul>
                <TabFoot active="3"></TabFoot>
            </div>
        );
    }
}