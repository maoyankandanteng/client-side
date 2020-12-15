/*
import {time} from './b'
setInterval(()=>{
    console.log(time)
},1000)
*/
/*import {name as Name,age,info} from './c'
// 可以执行里面的逻辑，不能获取模块导出的内容
import './d'

console.log(Name)
console.log(age)
info.name="wxq"
console.log(info)*/


// getName()
// 静态执行，所以在编译阶段就需要知道，在哪引入
// import {getN as getName} from "./e";
// 默认导出export default ，引入的时候就不需要加｛｝
// import getName  from "./e";

// 动态引入模块
// import {name} from "./e";
// import name from "./e";
// console.log(name)
