export let time=new Date()
setInterval(()=>{
    time=new Date()
},1000)
// export 可以出现在模块顶层的任意位置，不能出现在块级作用域
// ES6模块是静态编译

