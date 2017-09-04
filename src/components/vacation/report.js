/**
 * Created by lenovo on 2017/8/16.
 */
import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';

class report extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"jimmy"
        }
        this.handleClick=this.handleClick.bind(this)
    }
    componentWillMount() {
        console.log(1)
    }
    componentDidMount(){
        console.log(2)
    }
    componentWillUnmount(){
        console.log(3)
    }
    componentDidUpdate(){
        console.log(4)
    }
    handleClick(){
       this.setState({
           name:"jimmyClicked"
       })
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick} className="mui-btn">click</button>
                {this.state.name}
                <Button>sdasd</Button>
            </div>
        )
    }
}

export default report