// 交叉类型
/*
const mergeFunc=<T,U>(arg1:T,arg2:U):T&U=>{
    let res={} as T & U
    res=Object.assign(arg1,arg2)
    return res
}
let a=mergeFunc({a:'1'},{b:'b'});
let b=mergeFunc(1,"b")
globalThis.console.log(b)
*/

/*
const object1 = {
    a: 1,
    b: 2,
    c: 3
};
// Object.assign(target,...sources)
const object2 = Object.assign({c: 4, d: 5}, object1,"a");
globalThis.console.log(object2);
*/
// 联合类型 type1 | type2 |type3
/*
const getLengthFunc=(content:string|number|boolean):number=>{
    if(typeof content ===  'string'){
        return content.length
    }else if (typeof content === 'number'){
        return String(content).length
    }else{
        return 0
    }
}
globalThis.console.log(getLengthFunc("bhf"))
globalThis.console.log(getLengthFunc("12345"))
globalThis.console.log(getLengthFunc(false))
*/

// 类型保护
/*
let arr = ['abcdef', 12]
const getRandomValue = () => {
    const nu = Math.random() * 10
    if (nu < 5) {
        return arr[0]
    } else {
        return arr[1]
    }
}
const item=getRandomValue()

/!*if((item as string).length){
    globalThis.console.log((item as string).length)
}else{
    globalThis.console.log((item as number).toFixed())
}*!/

function isString(value:string|number):value is string {
   return typeof value === 'string'
}
let obj={}
// if(isString(item)){
if(typeof obj === 'object'){
// if((typeof item).includes('string')){  返回true
//     globalThis.console.log(item.length)
    globalThis.console.log("是")
}else{
    // globalThis.console.log(item.toFixed())
    globalThis.console.log("否")
}

*/
/*
class CreatedByClass1 {
    constructor(public name:string){
        this.name=name
    }
}
class CreatedByClass2 {
    constructor(public age:number){
        this.age=age
    }
}
const getRandomObj=()=>{
    return Math.random()<0.5 ? new CreatedByClass1("bhf") : new CreatedByClass2(23)
}

const obj =getRandomObj()

if(obj instanceof CreatedByClass1){
    globalThis.console.log(obj.name)
}else if(obj instanceof CreatedByClass2){
    globalThis.console.log(obj.age)
}*/

// null / undefined
/*let a="abc"
a=null
const b=(x:number,y?:number)=>{
    return x+(y||0)
}*/

/*function getSplicedStr(num:number|null):string {
    function getRes(prefix:string) {
        return prefix+num.toFixed().toString()
    }
    num=num || 0.1
    return getRes("leson_")
}
globalThis.console.log(getSplicedStr(2.03))*/

// 类型别名

/*type Childs<T>={
    current:T,
    child?:Childs<T>
}
// 无限套娃
let cc:Childs<string>={
    current:"first",
    child:{
        current:"second",
        child:{
            current:"third"
        }
    }
}
globalThis.console.log(cc)

type Child=Childs<string>*/

// 字面量类型
/*
type NAME='BHF'
const name1:NAME='BHF'
// const name2:NAME='bhf' 错误

type Direction="north"| "east" |"south"|"west"
const dir:Direction='north'
function getDirection(direction:Direction) {
    return direction.substr(0,1)
}
getDirection("north")
*/
/**
 * 可辨识联合
 * 1、具有普通的单例类型属性
 * 2、一个类型别名包含了哪些类型的联合
 */
/*
interface Square {
    kind: 'square',
    size: number
}

interface Rectangle {
    kind: 'rectangle',
    height: number,
    width: number
}

interface Circle {
    kind: 'circle',
    radius: number
}

type Shape = Square | Rectangle | Circle

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height / 2;
        case "square":
            return shape.size ** 2;
        // default:return assertNever(shape)
    }
}
function assertNever(value:never):never{
    throw new Error("Unexpected Object:"+value)
}
globalThis.console.log(getArea({kind: 'square', size: 2}))
globalThis.console.log(getArea({kind: 'rectangle', width: 2, height: 2}))
globalThis.console.log(getArea({kind: 'circle', radius: 2}))
*/

// 完整性检查






