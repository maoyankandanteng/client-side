// 类型推论  和  兼容性
// let nameInfo:string='bhf"
    // nameInfo=123
// 多类型联合
// Array<number | string> 修复 (number|string)[]
// let array1:(number|string)[]=[1,2,'abc','bhf']
// array1=[1,2]
// array1=['ln','wxq']
// array1=['ln',false]

// 上下文类型
// tslint:disable-next-line:only-arrow-functions
/*window.onmousedown=function (mouseEvent: MouseEvent) {
    globalThis.console.log(mouseEvent)
}

// 函数的兼容性
let x=(a:number)=>0
let y=(b:number,c:string)=>0
// x=y

const arrs=[1,2,3]
/!*arrs.forEach((item,index,array)=>{
    globalThis.console.log(item)
})*!/
// 后面 index，array 这两个参数没有用到
arrs.forEach((item)=>{
    globalThis.console.log(item)
})*/
// 参数类型
/*
let x=(a:number)=>0
let y=(c:string)=>0
*/
// 可选参数 和 剩余参数(无数可选参数)
// type handleFunc=(args:number[])=>number
/*type handleFunc=(...args:number[])=>number
const getSum=(arr:number[],callback:handleFunc):number=>{
    return callback(...arr)
}
const sumFunc:handleFunc=(...args:number[]):number=>args.reduce((a,b)=>a+b,0)
let resultValue=getSum([1,2,3],sumFunc)
globalThis.console.log(resultValue)*/

// 双向协变

/*let x=(a:number)=>0
let y=(b:number|string)=>0
x=y
y=x*/

// 返回值 类型
/*let x=():string|number=>0
let y=():string=>"a"
let z=():boolean=>false
x=y*/

// 函数重载
/*function merge(arg1:number,arg2:number):number
function merge(arg1:string,arg2:string):string
function merge(arg1:any,arg2:any) {
    return arg1+arg2
}

function sumFunc(arg1:number,arg2:number):number
function sumFunc(arg1:any,arg2:any):any{
    return arg1+arg2
}
let func=sumFunc
func=merge*/

// 数字枚举值  只与 数值字面量

// 类的兼容性
/*class AnimalClass {
    public static age:number
    constructor(public name:string){}
}
class PeopleClass {
    public static age:string
    constructor(public name:string){}
}
class FoodClass {
    constructor(public name:number){}
}
// 检测实例
let animal:AnimalClass
let people:PeopleClass
let food:FoodClass

animal=people
// animal=food
// 类的私有 和 受保护 属性 影响 兼容性
class ParentClass {
    private age:number
    constructor(){}
}
class ChildClass extends  ParentClass{
    constructor(){
        super()
    }
}
class OtherClass {
    private age:number
    constructor(){}
}
let child:ParentClass=new ChildClass()
// let other:ParentClass=new OtherClass()

// 泛型 兼容性
interface Data<T> {
    data:T
}
let data1:Data<number>
let data2:Data<string>*/
// data1=data2













