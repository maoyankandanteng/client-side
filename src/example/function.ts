// function addFnc(arg1:number,arg2:number) {
//     return arg1+arg2
// }
// const addF=(arg1:number,arg2:number)=>arg1+arg2
// 表明add 是这样的一个函数
/*
let add:(x:number,y:number)=>number

add=(arg1:number,arg2:number)=>arg1+arg2
// add=(arg1:string,arg2:number)=>arg1+arg2

// 使用类型别名定义函数
type Add = (x:number,y:number) =>number

// let add12:Add=(arg1:number,arg2:number)=>arg1+arg2

type isString=string
// 等效
interface SuiBian {
    firstName:isString,
    lastName:string
}

// 函数的参数
// 可选参数
type AddFunction1=(arg1:number,arg2:number,arg3?:number)=>number

let addFunction:AddFunction1
addFunction=(arg1,arg2,arg3)=>arg1+arg2+(arg3 ? arg3 : 0)
let abb=addFunction(1,2)
globalThis.console.log(abb)

// 默认参数
let addF=(x:number,y=3)=>x+y
// let addF=(x:number,y:number=3)=>x+y

// 多个参数
// ... 拆解数组和对象
/!*const handleData=(arg1:number,...args:number[])=>{
    // ....
}*!/

// 重载
// 会自动判断出返回的结果、
// function handleData(x:string):string[]
// function handleData(x:number):number[]
function handleData(x:any):any {
    if(typeof x=== 'string'){
        return x.split('')
    }else{
        return x.toString().split('').map((item)=>Number(item))
    }
}
globalThis.console.log(handleData('abc'))
globalThis.console.log(handleData(123))
*/

// handleData('abc').map((item)=>{return item.toFixed()})













