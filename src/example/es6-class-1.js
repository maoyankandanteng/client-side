/*function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.getPosition=function () {
    return "["+this.x+","+this.y+"]";
}
var point = new Point(1,2)
console.log(point)
console.log(point.getPosition())*/

/*class Point {
    constructor(x,y){
        this.x=x
        this.y=y
    }
    getPosition(){
        return `[${this.x},${this.y}]`
    }
}
const point=new Point(1,2)
console.log(point)
console.log(point.hasOwnProperty('x'))
console.log(point.hasOwnProperty('getPosition'))
console.log(point.__proto__.hasOwnProperty("getPosition"))*/
// console.log(point instanceof Point)
// console.log(point.getPosition())
// const point= Point(1,2)

// 取值函数  存值函数
/*
es5当中使用 get set 关键字
var info={
    _age:18,
    set age(newValue){
        if(newValue>18){
            console.log("怎么变老了")
            this._age=newValue
        }else{
            console.log("我还年轻")
        }
    },
    get age(){
        console.log("问这个干嘛")
        return this._age
    }
}
// info._age
console.log(info._age)
info._age=19
*/

/*//在es6 中使用 set get keywords
class Info {
    constructor(age){
        this._age=age
    }
    set age(newAge){
        console.log(newAge)
        this._age=newAge
    }
    get age(){
        console.log("火球")
        return this._age
    }
}
let info=new Info(18)
info.age=19
console.log(info.age)*/
//使用class 表达式

//函数
/*const fun=function () {

}
function fundc(){

}*/
/*class Info {
    constructor(){}
}
const C=class  {
    constructor(){}
}
const exa=new C()

console.log(exa)*/

/*function a() {

}
console.log(a.name)//打印函数名*/


/*//静态方法
class Point {
    // z=10
    constructor(x,y){
        this.x=x
        this.y=y
    }
    getPosition(){
        return `[${this.x},${this.y}]`
    }
    static getClsName(){
        return Point.name
    }
}

// console.log(point.getPosition())
//静态属性
Point.z=10

const point=new Point(1,2)

// console.log(point.getClassName())
console.log(Point.getClsName())

console.log(Point.z)*/

// 并没有明确的 私有方法 和 私有属性
// 1、命名前加下划线
// 2、_func2.call(this)相当于给了个域
// 3、static [Symbol('signature')](){}
/*const _func2=()=>{}
class Point {
    func1(){
        _func2.call(this)
    }
}
const p=new Point()*/
// p._func2()

// import Point from './a.js'
// const p=new Point()
// console.log(p)

// new.target

/*function Point() {
    console.log(new.target)
}
const p=new Point()
const p1=Point()*/

/*class Point {
    constructor(){
        console.log(new.target)
    }
    static getName(){
        return Point.name
    }
}
const p=new Point()*/


// es6：限制：不能通过父类创建 ，只能先继承再使用子类创建
// 如何在ts中实现
/*
class Parent {
    constructor(){
        if(new.target===Parent){
            throw new Error("不能通过父类创建 ，只能先继承再使用子类创建")
        }
    }
}
class Child extends Parent{
    constructor(){
        super()
    }
}

const a=new Child()
*/
/**
 * 默认情况下null和undefined是所有类型的子类型
 * 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
 */

/**
 * never类型表示的是那些永不存在的值的类型
 */











