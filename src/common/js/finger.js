/**
 * Created by lenovo on 2017/12/22.
 */
class finger {
  constructor(el) {
    this.el = el
  }
  princh (callback) {
    let isTouch = false
    let a1
    let a2
    this.el.addEventListener('touchstart', function (e) {
      let ev = window.e || e
      isTouch = true
      if (ev.touches.length > 1) {
        a1 = ev.touches[0]
        a2 = ev.touches[1]
        if (typeof callback === 'function') {
          callback(a1, a2)
        }
      }
    })
    document.addEventListener('touchmove', function (e) {
      let ev = window.e || e
      ev.stopPropagation()
      if (isTouch = true) {
        let b1 = ev.touches[0]
        let b2 = ev.touches[1]
        let k = Math.pow((b1.clientX - a1.clientX),2)
      }
    })
  }
}
export default finger