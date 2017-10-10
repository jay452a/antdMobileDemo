/**
 * Created by lenovo on 2017/8/16.
 */
import React, { Component } from 'react';
import { Button, WhiteSpace, Picker,List,DatePicker,InputItem,TextareaItem,ImagePicker  } from 'antd-mobile';
const Item = List.Item;

class report extends Component{
    constructor(props){
        super(props)
      const data = [{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
      }];
        this.state={
            vacationType:[
              {
              label: '年假',
              value: '0',
              },
              {
                label: '事假',
                value: '1',
              },
              {
                label: '调休假',
                value: '2',
              },
              {
                label: '病假',
                value: '3',
              },
            ],
            vacationDay:'',
            vacationInfo:'',
            files:data
        }
        this.handleVacationDay=this.handleVacationDay.bind(this)
        this.handleVacationInfo=this.handleVacationInfo.bind(this)
        this.fileChange=this.fileChange.bind(this)
        this.choseVacation=this.choseVacation.bind(this)
        this.submit=this.submit.bind(this)
    }
    componentWillMount() {
    }
    componentDidMount(){
    }
    componentWillUnmount(){
    }
    componentDidUpdate(){
    }
    choseVacation () {
     console.log('click',this)
    }
    handleVacationDay (event){
    this.setState({vacationDay: event});
    }
    handleVacationInfo (event) {
      this.setState({vacationInfo: event});
    }
    fileChange(files, type, index){
    console.log(files, type, index);
        this.setState({
          files,
        });
    }
    submit () {
      console.log(this.state)
    }
    render(){
        return (
            <div>
                <WhiteSpace size="lg" />
                <Picker
                  data={this.state.vacationType}
                  cols={1}
                  value={this.state.vacationVal}
                  onChange={v => this.setState({ vacationVal: v })}
                >
                    <List.Item arrow="horizontal">请假类型</List.Item>
                </Picker>
                <WhiteSpace size="lg" />
                
                <DatePicker onChange={v => this.setState({ dateStart: v })}
                            value={this.state.dateStart}
                            mode="date"
                >
                    <List.Item arrow="horizontal">开始时间</List.Item>
                </DatePicker>
                <WhiteSpace size="xs" />
                <DatePicker onChange={v => this.setState({ dateEnd: v })}
                            value={this.state.dateEnd}
                            mode="date"
                >
                    <List.Item arrow="horizontal">结束时间</List.Item>
                </DatePicker>
                <WhiteSpace size="xs" />
                <InputItem placeholder="请输入请假天数"
                           value={this.state.vacationDay}
                           onChange={this.handleVacationDay}
                >请假天数</InputItem>
                <WhiteSpace size="lg" />
                <TextareaItem
                  title="请假说明"
                  placeholder="请输入请假情况说明"
                  autoFocus
                  rows="3"
                  value={this.state.vacationInfo}
                  onChange={this.handleVacationInfo}
                  count="150"
                />
                <WhiteSpace size="lg" />
                <div className="picBox">
                    <p className="picTitle">相关图片</p>
                    <ImagePicker
                      files={this.state.files}
                      onChange={this.fileChange}
                      onImageClick={(index, fs) => console.log(index, fs)}
                      selectable={this.state.files.length < 5}
                    />
                </div>
                <WhiteSpace size="lg" />
                <Item>
                  <Button type="primary" onClick={this.submit}>提交</Button>
                </Item>
            </div>
        )
    }
}

export default report