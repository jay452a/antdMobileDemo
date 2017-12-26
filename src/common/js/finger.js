/**
 * Created by lenovo on 2017/12/22.
 * this is a finger plugin for mobile web
 * new finger(dom).princh(()=>{}).tap(()=>{}) 通过return this实现链式调用
 */
class finger {
  constructor(el) {
    this.el = el // 触发事件的dom节点
  }
  princh (callback) {
    let isTouch = false
    let a1
    let a2
    this.el.addEventListener('touchstart', function (e) {
      let ev = window.e || e
      ev.stopPropagation()
      isTouch = true
      if (ev.touches.length > 1) {
        a1 = ev.touches[0]
        a2 = ev.touches[1]
      }
    })
    document.addEventListener('touchmove', function (e) {
      let ev = window.e || e
      ev.stopPropagation()
      if (isTouch === true && ev.touches.length > 1) {
        let b1 = ev.touches[0]
        let b2 = ev.touches[1]
        let l1 = Math.sqrt(Math.pow((a1.clientX - a2.clientX),2) + Math.pow((a1.clientY - a2.clientY),2))
        let l2 = Math.sqrt(Math.pow((b1.clientX - b2.clientX),2) + Math.pow((b1.clientY - b2.clientY),2))
        let k = l2/l1 // 求得两点之间直线距离比例来实现双指缩放比例
        if (typeof callback === 'function') {
          callback(k)
        }
      }
    })
    this.el.addEventListener('touchend', function (e) {
      let ev = window.e || e
      ev.preventDefault()
      ev.stopPropagation()
      isTouch = false
    })
    return this
  }
  tap (callBack) {
    //触摸开始的时间
    let startTime = 0;
    //定义touchmove是否触发
    let ismove = false;
    let maxTime = 250;
    this.el.addEventListener('touchstart',function(e){
      startTime = Date.now();
      ismove = false;
    })
    this.el.addEventListener('touchmove',function(e){
      //触发就赋值为true
      ismove = true;
    })
    this.el.addEventListener('touchend',function(e){
      //判断是否是touchmove是否触发
      let ev = window.e || e
      ev.preventDefault()
      if (ismove) {
        return;
      }
      // 判断是否为长按
      if ((Date.now() - startTime) > maxTime) {
        return;
      }
    
      // 如果能够到这里
      if(typeof callBack === 'function') {
        callBack();
      }
    })
    return this
  }
  rotate () {
  
  }
}
export default finger