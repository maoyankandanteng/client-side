/*
function setName() {
    globalThis.console.log("get setName")
    return function (target) {
        globalThis.console.log(target)
    }
}
// 装饰器工厂：返回一个函数
function setAge() {
    globalThis.console.log("get setAge")
    return function (target) {
        globalThis.console.log("setAge")
    }
}
// 装饰器的组合使用
// 调用顺序:装饰器工厂由上至下，装饰器函数由下至上
@setName()
@setAge()
class AClass {}
// 被装饰的声明会作为参数target传递到装饰器函数
// 所有的装饰器不能用在声明文件 .d.ts ,任何外部上下文中，比如说使用declare的类中
*/

/*
// 类装饰器,当作表达式调用，只有唯一参数（被装饰的类)
let sign=null
function setName(name:string) {
    globalThis.console.log(name)
    return function (target:new ()=>any) {
        sign=target
        // 每个函数和类都有name属性，是函数和类的名字
        globalThis.console.log(target.name)
    }
}
@setName("白海峰")
class ClassDec {
    constructor(){}
}
globalThis.console.log(sign===ClassDec)
globalThis.console.log(sign===ClassDec.prototype.constructor)
*/

/*
// 通过装饰器，可以修改类的原型对象和构造函数
function addName(constructor:new()=>any) {
    constructor.prototype.name="白海峰"
}
@addName
class ClassD {}
interface ClassD {
    name:string
}
// 定义一个接口，通过声明合并
const d=new ClassD()
globalThis.console.log(d.name)
globalThis.console.log("name" in d) // true
*/


// 装饰器求值
// 参数---->方法---->访问符(get)----->属性---->应用到每个实例成员
// 参数---->方法---->访问符(get)----->属性---->应用到每个静态成员
// 参数装饰器应用到构造函数
// 类装饰器应用到类

 // 一个对象在默认状态下
// 1.extensible：可扩展
// 2.configurable:可配置
// 注意，如果你在使用Object.seal方法后，给对象添加新的属性可能不会报错，但是不会起任何作用，如果你通过Object.defineProperty方法重新配置该对象的特性，则会报无法重新定义不可配置属性的特性的错误

/*
function sealed(constructor:Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype)
}
class Greeter {
    greeting:string;
    constructor(message:string){
        this.greeting=message
    }
    greet(){
        return "hello "+this.greeting
    }
}
globalThis.console.dir(Greeter)
*/
/*// 如果类装饰器返回一个值，替代被装饰的类的声明(修改类的实现，但是要自己处理原有的原型链)
function classDecorator<T extends new(...args:any[]) =>{}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
// function classDecorator(constructor:any):any {
//     return class{
//         newProperty = "new property";
//         hello = "override";
//     }
// }

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

globalThis.console.log(new Greeter("world"));*/
// 方法装饰器
// 方法装饰器不能用在声明文件 .d.ts ,重载或者任何外部上下文中，比如说使用declare的类中

/*
// 属性修饰符
interface ObjWithAnyKeys{
    [key:string]:any
}
let obj2:ObjWithAnyKeys={
    age:18
}
Object.defineProperty(obj2,'name',{
    value:"白海峰",
    writable:false,
    configurable:false,
    enumerable:false
})
// 可配置性是不可逆操作
// Object.defineProperty(obj2,'name',{
//     value:"魏晓庆",
//     writable:true
// })
globalThis.console.log(obj2.name)
obj2.name="魏晓庆"
globalThis.console.log(obj2.name)
// tslint:disable-next-line:forin
for(const key in obj2){
    globalThis.console.log(obj2[key])
}
*/

// 方法装饰器
// function enumerable(bool:boolean) {
//     return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
//         globalThis.console.log(target)
//         globalThis.console.log(descriptor)
//         descriptor.enumerable=bool
//     }
// }
/*
function enumerable(bool:boolean):any{
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        return {
            value(){
                return "not age"
            },
            enumerable:bool
        }
    }
}
class ClassF {
    constructor(public age:number){}
    @enumerable(false)
    public getAge(){
        return this.age
    }
}
let objF=new ClassF(18)
globalThis.console.log(objF.getAge())
for(const key in objF){
    globalThis.console.log(key)
}
*/
/*// 访问器装饰器
function enumerable(bool:boolean):any{
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable=bool
    }
}
class ClassF {
    private _name:string
    constructor(name:string){
        this._name=name
    }
    @enumerable(false)
    get name(){
        return this._name
    }
    set name(name){
        this._name=name
    }
}
let objF=new ClassF("bhf")
for(const key in objF){
    globalThis.console.log(key)
}*/

/*
// 属性装饰器
function printPropertyName(target: any, propertyName: string){
    globalThis.console.log(propertyName)
}
class ClassF {
    @printPropertyName
    public name:string
    constructor(name:string){
        this.name=name
    }
}
*/
/*
// 参数装饰器
function required(target: any, propertyName: string,index:number){
    globalThis.console.log(`修饰的是${propertyName}的第${index+1}个参数`)
}
class ClassF {
    public name:string="白海峰"
    public age:number=18
    public getInfo(prefix:string,@required infoType:string):any{
        return prefix+' '+ this[infoType]
    }
}
interface ClassF {
    [key:string]:string|number|Function
}
let objF=new ClassF()
globalThis.console.log(objF.getInfo("hello","age"))

*/














