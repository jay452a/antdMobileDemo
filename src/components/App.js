import React, { Component } from 'react';
import "../static/css/vacation.css";
import '../static/css/App.css';
import { BrowserRouter as Router,Route,Link,Redirect, NavLink } from "react-router-dom";
import Report from "./vacation/report"
import History from "./vacation/history"


const vacation = ({ match }) => {
  return (
    <div>
      <ul className="vacationTitle">
        <li>
          <NavLink to={`${match.url}/report`} activeClassName="selected">
            请假申请
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/history`} activeClassName="selected">
            请假记录
          </NavLink>
        </li>
      </ul>
      <Route path={`${match.url}/report`} component={Report}/>
      <Route path={`${match.url}/history`} component={History}/>
    </div>
  )
}
const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)



class BasicExample extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"jimmy",
            data:[],
            error:false
        }
    }
    componentDidMount() {
       /* let _this=this
        fetch('/json/logs.json',{method: 'GET'}).then(function(response) {
           return response.json()
        }).then(function (res) {
            console.log(res)
            _this.setState({
                data:res,
                name:"jimmyBack"
            })
        }).catch(function () {
            _this.setState({
                error:true
            })
        });*/
        
    }

    componentWillUnmount() {
    
    }
    render() {
        return (
            <Router>
                <div>
                   {/* <Redirect from='/' to='/vacation'/>*/}
                    <Route path="/vacation" component={vacation}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }
}
export default BasicExample
