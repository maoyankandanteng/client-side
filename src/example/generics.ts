/*const getArray=<T>(value:T,times:number=5):T[]=>{
    return new Array(times).fill(value)
}*/
/*globalThis.console.log(getArray('ab',3).map((item)=>{
    return item.length
}))*/
// 丢失了对类型的检测
// 使用泛型进行约束

/*globalThis.console.log(getArray<number>(2,3).map((item)=>{
    return item+1
}))*/
// 泛型变量
/*
const getArray = <T, U>(arg1: T, arg2: U, times: number = 3): Array<[T, U]> => {
    return new Array(times).fill([arg1,arg2])
}

// globalThis.console.log(getArray<string,number>("bhf",2,3))
getArray<string,number>("bhf",2,3).forEach((item)=>{
    globalThis.console.log(item[0].length)
    globalThis.console.log(item[1].toFixed())
})
*/
// 泛型在类型定义中的使用
/*let getArray:<T>(value:T,times:number)=>T[]
getArray=(arg:any,times:number)=>{
    return new Array(times).fill(arg)
}*/

// 类型别名

/*type GetArray=<T>(value:T,times:number)=>T[]
let getArray:GetArray=(x:any,times:number):any=>{
    return new Array(times).fill(x)
}*/
// 在接口中使用泛型
/*interface GetArray2<T> {
    (arg:T,times:number):T[],
    arr:T[]
}*/
// 泛型继承 泛型约束
/*interface ValueWithLength {
    length:number
}
const getArray=<T extends ValueWithLength>(arg:T,times:number):T[]=>{
    return new Array(times).fill(arg)
}

getArray("abc",3)
getArray([1,2,3],3)
getArray({length:2,name:"bhf"},3)

// 在泛型约束中使用类型参数
const getProps=<T,K extends keyof T>(object:T,propName:K)=>{
    return object[propName]
}

const objx={
    a:'a',
    b:'b'
}*/
// getProps(objx,'c')
















