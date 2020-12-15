// es5 通过原型链 实现 继承
/*function Food() {
    this.type="food"
}
Food.prototype.getType=function () {
    return this.type
}
function Vegetables(name) {
    this.name=name
}
Vegetables.prototype=new Food()

const tomato=new Vegetables("tomato")
console.log(tomato.getType())*/

// es6 类的继承
/*class Parent {
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
}
class Child extends Parent{
    constructor(name,age) {
        super(name);
        this.age=age
    }
}
const c=new Child("lison",19)
// console.log(c)
console.log(Object.getPrototypeOf(Child) === Parent)*/

// super 函数
// super 对象
// 1、 普通方法 指向 是父类的原型对象 Parent.prototype
// 2、 静态方法中指向父类 Parent

/*class Parent {
    constructor(){
        this.type='pp'
    }
    getName(){
        return this.type
    }
}
//添加了静态方法
Parent.getType=()=>{
    return 'is parent'
}


class Child extends Parent{
    constructor() {
        super();
        console.log('constructor:'+super.getName())
    }
    getParentName(){
        console.log("getParentName:"+super.getName())
    }
    static getParentType(){
        console.log("getParentType:"+super.getType())
    }
}*/
/*
const a=new Child()
a.getParentType()*/

// console.log(Object.getPrototypeOf(Parent))
// console.log(Parent.prototype)

// Child.getParentType()

/*class Parent {
    constructor(){
        this.name="parent"
    }
    print(){
        console.log(this.name)
    }
}
class Child extends Parent{
    constructor(){
        super()
        this.name='child'
    }
    childPrint(){
        super.print()
    }
}

const a=new Child()
a.childPrint()*/

// prototype es自带的
// __proto__ 浏览器厂商给每个对象添加的

// 子类的__proto__指向父类本身
// 子类的prototype 属性 的 __proto__ 指向父类的prototype 属性
// 实例的__proto__属性 的 __proto__指向的父类实例的__proto__


/*
function Person() {
    this.name = "bhf"
    this.say=function()
    {
        console.log("我那个")
    }
}

let p1 = new Person()
let p2 = new Person()

function Dog(){
    this.name="bhf"
}
Dog.prototype.say=function () {
    console.log("汪汪汪")
}
*/

















