/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { HashRouter  as Router,Route,Link,Redirect, NavLink,Switch } from "react-router-dom";
import routeApp from './routerApp'
import api from '@/api/index'
import { observer } from "mobx-react";  // 在react组件中使用
import  store  from '@/store/index';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
console.log(customHistory)
@observer
class router extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"jimmy",
            data:[],
            error:false
        }
    }
    componentDidMount() {
        api.getUserInfo().then(res => {
            console.log(res)
            this.props.store.user= res.body
        }, err => {
            console.log(err)
        })
    }

    componentWillUnmount() {

    }
    render() {
        console.log(store.jujia, 'route')
        return (
            <Router>
                <div>
                    <Switch>
                    {
                        routeApp.map((res,index)=> {
                            return (
                              // mobx <Route path={res.path} render={() => <res.component store={store.jujia}/>} key={index}/>
                                <Route path={res.path} render={() => <res.component/>} key={index}/>
                                )
                        })

                    }
                    <Route render={() => <div style={{textAlign:'center',marginTop: '30%'}}>oops!!404</div>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default router
