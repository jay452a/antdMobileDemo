/**
 * Created by lenovo on 2017/12/22.
 * this is a finger plugin for mobile web >=IE9
 * new finger(dom).princh(()=>{}).tap(()=>{}) 通过return this实现链式调用
 *
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
  swipe (callback) {
    let isTouch = false
    let a1
    let a2
    let leave = 80
    this.el.addEventListener('touchstart', function (e) {
      let ev = window.e || e
      ev.stopPropagation()
      if (ev.touches.length === 1) {
        isTouch = true
        a1 = ev.touches[0]
      } else {
        isTouch = false
        a1 = null
      }
    })
    document.addEventListener('touchmove', function (e) {
      if (!isTouch) {
        return
      }
      let ev = window.e || e
      ev.stopPropagation()
      if ( ev.touches.length === 1) {
        a2 = ev.touches[0]
      } else {
        a2 = null
      }
    })
    this.el.addEventListener('touchend', function (e) {
      let ev = window.e || e
      ev.stopPropagation()
      if(!a2 || !a1) {
        return
      }
      if ((a2.clientX - a1.clientX) > leave && (a2.clientX - a1.clientX) > Math.abs(a2.clientY - a1.clientY)) {
        if (typeof callback === 'function') {
          callback('right')
        }
      }
      if ((a1.clientX - a2.clientX) > leave && (a1.clientX - a2.clientX) > Math.abs(a2.clientY - a1.clientY)) {
        if (typeof callback === 'function') {
          callback('left')
        }
      }
      if ((a2.clientY - a1.clientY) > leave && (a2.clientY - a1.clientY) > Math.abs(a2.clientX - a1.clientX)) {
        if (typeof callback === 'function') {
          callback('bottom')
        }
      }
      if ((a1.clientY - a2.clientY) > leave && (a1.clientY - a2.clientY) > Math.abs(a2.clientX - a1.clientX)) {
        if (typeof callback === 'function') {
          callback('top')
        }
      }
      isTouch = true
    })
    return this
  }
  doubleTap (callback) {
    let startTime = 0
    let ismove = false;
    let time = 0 //点击次数
    let maxTime = 250;
    this.el.addEventListener('touchstart', function (e) {
      let ev = window.e || e
      ev.stopPropagation()
      startTime = Date.now();
      ismove = false;
      let timer = setTimeout(() => {
        time = 0
        if (time === 0) {
          clearTimeout(timer)
        }
      }, 500)
    })
    this.el.addEventListener('touchmove', function(e){
      //触发就赋值为true
      ismove = true;
    })
    this.el.addEventListener('touchend' ,function (e) {
      time++
      if (ismove) {
        return
      }
      // 判断是否为长按
      if ((Date.now() - startTime) > maxTime) {
        return;
      }
      console.log(time)
      if (time === 2) {
        if(typeof callback === 'function') {
          callback()
          time = 0
        }
      } else {
        return
      }
    })
    return this
  }
}
export default finger