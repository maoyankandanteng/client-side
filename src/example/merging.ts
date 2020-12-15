// 在ts中接口和命名空间是可以多次声明的

/*
// 同名接口合并
interface Info {
    name: string,

    getRes(input: string): number
}

interface Info {
    age: number,

    getRes(input: number): string
}

let info: Info = {
    name: "bhf", age: 18, getRes(text: any): any {
        if (typeof text === "string") {
            return text.length
        } else if (typeof text === "number") {
            return String(text)
        }
    }
}
globalThis.console.log(info.getRes("白海峰"))*/
// TypeScript中的声明会创建以下三种实体之一：命名空间，类型或值
/*class A {
    constructor(public name:string){
        this.name=name
    }
}
const a1=new A("bhf")
globalThis.console.log(typeof a1)*/
// 命名空间的合并
/*namespace Validations{
    const isNumberReg=/^[0-9]+$/
    export const checkNumber=(text:any)=>{
        return isNumberReg.test(text)
    }
}
namespace Validations{
    import isNumberReg = Validation.isNumberReg;
    globalThis.console.log(isNumberReg)
    export const isLetterReg=/^[A-Za-z]+$/
    export const checkLetter=(text:any)=>{
        return isLetterReg.test(text)
    }
}*/
// 不同类型合并： 命名空间和函数   命名空间和枚举  命名空间和类
// 同名的类和命名空间，类必须在命名空间的前面
/*class Validations {
    constructor(){}
    checkType(){globalThis.console.log("白海峰")}
}
namespace Validations{
    export const isLetterReg=/^[A-Za-z]+$/
    export const checkLetter=(text:any)=>{
        return isLetterReg.test(text)
    }
}
globalThis.console.dir(new Validations().checkType())*/

// 同名的函数和命名空间，函数必须在命名空间的前面

/*function countUP() {
    countUP.count++
}
namespace countUP{
    export let count=0
}
countUP()
countUP()
globalThis.console.log(countUP.count)*/

// 同名的枚举和命名空间,没有先后顺序
/*enum Colors {
    red,
    green,
    blue
}
namespace Colors{
    export const yellow=3
}
globalThis.console.log(Colors)*/


















