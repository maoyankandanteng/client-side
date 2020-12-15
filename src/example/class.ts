/*class Parent {
    protected name:string
    private age:number
    readonly sex:string
    constructor(name:string,age:number,sex:string){
        this.name=name
        this.age=age
        this.sex=sex
    }
    public getAge(){
        return this.age
    }
    protected getName(){
        return this.name
    }
}
class Child extends Parent{
    constructor(name:string,age:number){
        super(name,age,"男")
        // globalThis.console.log(super.getName())
    }
}
// protected constructor 不能直接使用new创建实例，只能通过子类subclass
const p=new Parent("hhf",1,"女")
const c=new Child("ln",2)
globalThis.console.log(c.sex)
globalThis.console.log(p)

// readonly 属性
class UserInfo {
    public readonly name:string
    constructor(name:string){
        this.name=name
    }
}
const userInfo=new UserInfo("bhf")
globalThis.console.log(userInfo)*/

// userInfo.name="nf" 不能赋值，

// 参数属性 修饰符
/*class A {
    constructor(public name:string){
        // this.name=name
    }
}
const a1=new A("bhf")

globalThis.console.log(a1.name)*/

// 静态属性
/*

class Parent {
    // 可选属性
    protected name?:string
    private _age:number
    readonly sex:string
    static favorite:string="ball"
    constructor(sex:string,name?:string,){
        this.name=name
        // this.age=age
        this.sex=sex
    }
    public getAges(){
        return this.age
    }
    protected getName(){
        return this.name
    }
    static getFavorite(){
        return Parent.favorite
    }
    set age(newValue){
        globalThis.console.log("设置值")
        this._age=newValue
    }
    get age(){
        globalThis.console.log("获取值")
        return this._age
    }
}
class Child extends Parent{
    constructor(name:string,age:number){
        super("男",name)
        // globalThis.console.log(super.getName())
    }
}
const p=new Parent("男","白海峰")
p.age=10
*/
// 抽象类
/*
abstract class People {
    abstract _favorite:string
    protected constructor(public name:string){}
    public abstract printName():void
    abstract get getFavorite():string
    // 不能标记返回值类型
    abstract set setFavorite(newValue:string)
}
class Man extends People{
    _favorite:string
    constructor(name:string,favorite:string){
        super(name)
        this._favorite=favorite
    }
    printName(): void {
        globalThis.console.log(this.name)
    }
    set setFavorite(newValue:string){
        this._favorite=newValue
    }
    get getFavorite(){
        return this._favorite
    }
}
let man:People=new Man("白海峰","美女")
// man.printName()
globalThis.console.log(man._favorite)
*/

 /*class People {
     constructor(public name:string){}
 }
 // let p2:People=new People("白海峰")
 class Animal {
     constructor(public name:string){}
 }
 let p2:People=new Animal("小狗")
globalThis.console.log(p2)
*/

// 使用接口 可以强制 类 包含某些内容

/*
const create=<T>(c:new()=>T):T=>{
    return new c()
}

class Info {
    public age:number
}
create(Info)
*/















