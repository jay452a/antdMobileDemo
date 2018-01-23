/**
 * Created by lenovo on 2018/1/22.
 */
// 函数式编程
(function () {
  let root = this || {} // 兼容浏览器环境、node环境、webwork环境
  let ceshi = function () {
    console.log(this instanceof ceshi, 1123)
    if(this instanceof ceshi) {
      return this
    } else {
      return new ceshi()
    }
  }
  let name = 'jimmy'
  ceshi.getName = function () {
    return name
  }
  ceshi.setName = function (set) {
    name = set
  }
  ceshi.duplicate = (arr) => {
    let data = []
    if (arr&&arr.length > 0) {
      for (let i = 0; i <  arr.length; i++) {
        if (data.indexOf(arr[i]) === -1) {
          data.push(arr[i])
        }
      }
    }
    return data
  }
  ceshi.sum = (a, b) => {
    return a + b
  }
  
  
  
  // 获取所有function名称并返回一个数组
  ceshi.getFun = function () {
    var list = []
    for (var key in ceshi) {
      list.push(key)
    }
    return list
  }
  // 将所有函数赋值到prototype属性上
  var mixin = function () {
    var FunList  =  ceshi.getFun()
    for (let i = 0 ; i < FunList.length; i++) {
      ceshi.prototype[FunList[i]] = ceshi[FunList[i]]
    }
  }
  mixin()
  // 对外暴露接口
  if (module && module.exports) {
    module.exports = ceshi
  } else {
    root.ceshi = ceshi
  }
})()