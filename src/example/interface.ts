/*
interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({firstName, lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}


let fullName = getFullName({firstName: "白", lastName: "海峰"})

// 可选属性
interface Vegetable {
    color?: string,
    readonly type: string,

    [propName: string]: any
}

let getVegetables = ({color, type}: Vegetable) => {
    return `A ${color ? (color + ' ') : ''}${type}`
}
// 使用多余属性(伸缩属性)
// 1、使用断言 （强制类型转换)
// 2、使用字符串索引签名 string index signature
// 3、赋值变量
let vegetableInfo = {type: "apple", size: 2}
// console.log(getVegetables({type:"apple",size:2} as Vegetable))
globalThis.console.log(getVegetables({type: "apple", size: 2, opacity: 10}))
// globalThis.console.log(getVegetables(vegetableInfo))

let vegetableObj: Vegetable = {
    type: "tomcat"
}
// 只读属性
// vegetableObj.type="bhf"

// 定义对象的结构
interface ArrInter {
    0: number,
    readonly 1: string
}

let arr: ArrInter = [1, "a"]

// arr[1]='bhf'
// 定义函数的结构,使用类型别名
type AddFunc = (num1: number, num2: number) => number
// 参数的名字不必相同，只要位置对应上
const add: AddFunc = (num1, num2) => num1 + num2

/!*
interface RoleDic {
    [id:number]:string
}
const role1:RoleDic={
    1:"bhf",
    2:"ln"
}*!/

interface RoleDic {
    [id: string]: string
}

const role1: RoleDic = {
    1: "bhf",
    "name": "ln"
}

// 接口的继承

interface Vegetables {
    color: string
}

interface Tomato extends Vegetables {
    radius: number
}

interface Carrot extends Vegetables {
    length: number
}

let tomato: Tomato = {
    color: "red",
    radius: 10
}

// 函数添加属性
interface Counter {
    (): void,

    count: number
}

const getCounter = (): Counter => {
    const c = () => {
        c.count++
    }
    c.count = 0
    return c
}
const counter:Counter=getCounter()
counter()
globalThis.console.log(counter.count)
counter()
globalThis.console.log(counter.count)


*/









