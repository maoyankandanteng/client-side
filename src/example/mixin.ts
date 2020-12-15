/*
interface AO {
    a:string
}
interface BO {
    b:string
}
let a:AO={
    a:"a"
}
let b:BO={
    b:"b"
}
let AB=Object.assign(a,b)
globalThis.console.log(AB)
*/
class ClassA {
    isA:boolean
    funcA(){globalThis.console.log("this is A")}
}
class ClassB {
    isB:boolean
    funcB(){}
}
class ClassAB implements ClassA,ClassB{
    isA:boolean=false
    isB:boolean=false
    funcA:()=>{}
    funcB:()=>{}
    constructor(){}
}
function mixinFunc(base:any,from:any[]) {
    from.forEach(item=>{
        Object.getOwnPropertyNames(item.prototype).forEach((key)=>{
            globalThis.console.log(key)
            base.prototype[key]=item.prototype[key]
        })
    })
}
mixinFunc(ClassAB,[ClassA,ClassB])
const ab=new ClassAB()
globalThis.console.log(ab)
ab.funcA()
