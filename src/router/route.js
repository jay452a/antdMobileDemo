/**
 * Created by 56234 on 2018/8/29.
 */
import React, { Component } from 'react';
import { BrowserRouter  as Router,Route,Link,Redirect, NavLink } from "react-router-dom";
import routeApp from './routerApp'

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


    }

    componentWillUnmount() {

    }
    render() {
        return (
            <Router>

                <div>
                    {
                        routeApp.map((res,index)=> {
                            return (
                                <Route path={res.path} component={res.component} key={index}/>
                                )
                        })
                    }
                </div>
            </Router>
        )
    }
}
export default router
