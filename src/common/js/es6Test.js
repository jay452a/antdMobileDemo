/**
 * Created by lenovo on 2017/9/12.
 */
const es6Test = () =>{
  // set数据结构
  const set = new Set([1, 2, 3, 4, 4]);
  for (let item of set.keys()) {
    console.log(item);
  }
  for (let item of set.entries()) {
    console.log(item);
  }
  set.forEach((value, key) => {console.log(value * 2);console.log(key)} )
  // weakset
  const ws = new WeakSet();
  const obj = {a:1};
  const foo = {a:2};
  console.log(ws)
  //map数据结构
  var map =new Map()
  map.set(1,'aaa')
  map.set(2,'aaa')
  map.set(3,'aaa')
  console.log(map.get(1))
  console.log(map.keys())
  console.log(map.values())
  console.log([map.entries()])
  //proxy
  var proxy = new Proxy({}, {
    get: function(target, property) {
      console.log(target,property)
      return 35;
    }
  });
  console.log(proxy.time)
  var json={name:'jimmy'}
  console.log('name' in json) //判断属性是否在json数组中
  
  const queuedObservers = new Set();
  //proxy观察者模式
  const observe = fn => queuedObservers.add(fn);
  const observable = obj => new Proxy(obj, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      queuedObservers.forEach(observer => observer());
      return result;
    }
  });
  const person = observable({
    name: '张三',
    age: 20
  });
  
  function print() {
    console.log(`${person.name}, ${person.age}`)
  }
  
  observe(print);
  setTimeout(function () {
    person.name = '李四';
  },1000)
  //promise异步操作
 function listArr(array) {
   return new Promise(function (resolve,reject) {
     let i = 0
     array.map(function (item,index) {
       i++
     })
     if(i == array.length){
       return resolve('已经遍历完成')
       console.log('promise')
     }else{
       reject('not done')
     }
   })
 }
  /*listArr([1,2,3]).then(res => {
    console.log(res)
    return res
  },errorMsg => {
    console.log(errorMsg)
  }).catch(res => console.log(res))*/
  let result=listArr([1,2,3])
  console.log(result)
  //promise.all
  const p1 = new Promise((resolve, reject) => {
    resolve('p111');
  })
  const p2 = new Promise((resolve, reject) => {
    resolve('p222');
  })
  Promise.all([p1,p2]).then(res=>{
    console.log(res)
  }).catch(error=>console.log(error))
  //for of 循环
  const nameArr=['jimmy','json','jack']
  for (let v of nameArr){
    console.log(`for of ${v}`)
  }
  const nameJSON=[{name:'jimmy',age:'25'}]
  for (let v of nameJSON){
    console.log(`for of ${v.age}`)
  }
  //async异步操作
  function getname(type) {
    return new Promise((resolve) => {
      setTimeout(()=>resolve('jimmy'), type);
    });
    
  }
  function getAge(name) {
    if(name=='jimmy'){
      return 26
    }else if(name=='jack'){
      return 28
    }else if(name=='bob'){
      return 12
    }
  }
  async function getPersonInfo(type) {
    try {
      var name =  await getname(type)
      let string = name.length
      return string
    }catch(e) {
      throw new Error(e+'catch');
    }
  }
  getPersonInfo(5000).then(res=>{
    console.log('输出名字长度为'+res)
  },msg =>{
    console.log(msg,1)
  }).catch(msg=>console.log(msg,2))
  
  //另一个例子
  function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 1500);
  
  async function getTitle(url) {
    let response = await fetch(url);
    console.log(response)
    let arrresult =await listArr([1,2,3])
    console.log(arrresult)
    let html = await response.text();
    return arrresult
  }
  getTitle('https://tc39.github.io/ecma262/').then(res=>console.log('html is'+res))
  
}

export default es6Test