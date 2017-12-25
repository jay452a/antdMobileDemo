/**
 * Created by lenovo on 2017/12/20.
 */
import {  computed, action, observable } from "mobx";
class MyState {
  @observable num1 = 0;
  @observable num2 = 100;
  
  @action addNum1 = () => {
    this.num1 ++;
  };
  @action addNum2 = () => {
    this.num2 ++;
  };
  @computed get total() {
    return this.num1 + this.num2;
  }
}

class Time {
  @observable time = 0;
  @action setTime = () => {
    setInterval(() => {
      this.time++
    }, 1000)
  };
}
export default {
  newState: new MyState(),
  Timeer: new Time()
}
