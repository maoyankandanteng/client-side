/**
 * this
 * 全局对象，类实例对象，构建函数实例
 */
// 计算器 链式操作
/*class Counter {
    constructor(public count:number=0){}
    public add(value:number){
        this.count+=value
        return this
    }
    public subtract(value:number){
        this.count-=value
        return this
    }
}
// let counter=new Counter(10)
// globalThis.console.log(counter.add(3).subtract(2))
class PowCounter extends Counter{
    constructor(public count:number=0){
        super(count)
    }
    public pow(value:number){
        this.count=this.count**value
        return this
    }
}
let powCounter=new PowCounter(2)
globalThis.console.log(powCounter.pow(2).add(1))*/

// 索引类型查询 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合
/*let a=Symbol("bhf")
let b=Symbol("bhf")
globalThis.console.log(a===b)

let c=Symbol.for("wxq")
let d=Symbol.for("wxq")
globalThis.console.log(c===d)*/

// keyof
/*interface Info {
    name:string,
    age:number
}
type de=string|number
let info:keyof Info
info="name"
info="age"*/

/*
type nameType=Info['name']
let aa:nameType="bhf"
*/

// info="sex"
// globalThis.console.info(info)
// 泛型 检查使用动态属性名的代码
/*function getValue<T,K extends keyof T>(obj:T,names:K[]) :T[K][]{
    return names.map((n)=>obj[n])
}
let infoObj={
    name:"bhf",
    age:30,
    1:"male"
}
let b:(string|number)[]=getValue(infoObj,["name","age",1])
globalThis.console.info(b)*/
// 索引访问
/*let infoObj={
    name:"bhf",
    age:30,
    sex:"male"
}
function getValue<T,K extends keyof T>(obj:T,name:K) :T[K]{
    return obj[name]
}
let b=getValue(infoObj,"age")
globalThis.console.log(b)

interface Objs<T> {
    [key:string]:T
}
let a:Objs<number>={
    age:18
}
let keys:Objs<number>['name']
keys=2*/


/*interface MapInterface<T> {
    [key: string]: T;
   /!* name:string,
    age:number
    unknown:T*!/
}
let keys: keyof MapInterface<number>; // 联合类型 string | number
let value: MapInterface<number>['foo']; // number*/
// keys=1
/*

interface MapInterface {
     name:string,
     age:number
}
type NameType=MapInterface['name']
*/

/*interface TypeDefine {
    a:never,
    b:never,
    c:string,
    d:number,
    e:undefined,
    f:null,
    g:object
}
type Test=TypeDefine[keyof TypeDefine]*/
// 映射类型
// 接口 限定类型
/*interface Info {
    name:string,
    age:number,
    sex:string
}
// 类
class DefineClass{
    public name:string="bhf"
    constructor(name:string){
        this.name=name
    }
}
// in 内部实现上   for in 循环
type ReadOnlyType<T>={
    readonly [P in keyof T]:T[P]
}
type RemoveReadonlyInfo2<T>={
    -readonly [P in keyof T]:T[P]
}
type ReadOnlyInfo1=ReadOnlyType<Info>

type InfoWithoutReadonly=RemoveReadonlyInfo2<ReadOnlyInfo1>

let info3:InfoWithoutReadonly={
    name:"bhf",
    age:18,
    sex:"male"
}
info3.name="ln"

type PartInfo1=Partial<Info>
let info1:ReadOnlyInfo1={
    name:"bhf",
    age:18,
    sex:"male"
}
let info2:PartInfo1={
    name:"bhf",
    // age:18,
    sex:"male"
}
// info1.name="ln"
globalThis.console.log()*/

// 内置 Readonly Partial
// Pick Record
/*type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};*/
/*interface Info {
    name: string,
    age: number,
    sex: string
}

let info: Info = {
    name: "bhf",
    age: 18,
    sex: "male"
}

// 拾取某对象的属性和属性值 返回类型Pick<T,K>
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const res1: any = {}
    keys.map(key => {
        res1[key] = obj[key]
    })
    return res1
}

// let keys=['name','age','sex']
let suibian = pick(info, ['name', 'age', 'sex'])
globalThis.console.log(suibian)

// 将对象中的属性转化为其他值 Record
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U) :Record<K,U>{
    const res2: any = {}
    for (const key of Object.keys(obj)) {
        res2[key] = f(obj[key])
    }
    return res2
}
interface ValueNum<T> {
    [index:string]:T
}
const names:ValueNum<string>={0:"hello",1:"world",2:"bye"}
const lengths=mapObject(names,(s)=>s.length)
globalThis.console.log(lengths)*/
// Readonly Partial Pick同态
// Record 非同态
// 映射类型
/*
interface Info {
    name: string,
    age: number,
    sex: string
}
// 把所有属性变成只读
type ReadonlyInfo=Readonly<Info>
// 把所有属性变成可选
type PartialInfo=Partial<Info>
// 抽取Info的子集
type PickInfo=Pick<Info,'name'|'age'>


// 非同态： 会创建新属性，新属性由Record第一个属性指定
type RecordInfo=Record<'x'|'age',Info>
let info={
    name: "bhf",
    age: 18,
    sex: "male"
}
let a:RecordInfo={age:info,x:info}
globalThis.console.log(a)

*/
// 映射类型推断
// 包装的操作
/*type Proxy<T>={
    get():T;
    set(value:T):void;
}
type Proxify<T>={
    [P in keyof T]:Proxy<T[P]>
}
function proxify<T>(obj:T):Proxify<T> {
    const result={} as Proxify<T>
    for(const key of Object.keys(obj)){
        result[key]={
            get:()=>obj[key],
            set:(value)=>obj[key]=value
        }
    }
    return result
}
let props={
    name:'hbf',
    age:18
}
let proxyProps=proxify(props)
globalThis.console.log(proxyProps)
proxyProps.name.set("华为")
globalThis.console.log(proxyProps.name.get())

// 拆包
function unproxify<T>(t:Proxify<T>) : T{
    const result={} as T
    for(const k of Object.keys(t)){
        result[k]=t[k].get()
    }
    return result
}
let originalProps=unproxify(proxyProps)
globalThis.console.log(originalProps)*/
// 增加或移除特定修饰符

/*
const strIndex='a'
const numIndex=1
const symbolIndex=Symbol()
type Objs2={
    [strIndex]:string,
    [numIndex]:number,
    [symbolIndex]:symbol
}
type keysType=keyof Objs2
type ReadonlyTypes<T>={
    readonly [P in keyof T]:T[P]
}
let obj3:ReadonlyTypes<Objs2>={
    a:'a',
    1:11,
    [symbolIndex]:Symbol()
}
let obj5:Readonly<Objs2>={
    a:'a',
    1:11,
    [symbolIndex]:Symbol()
}
// obj5.a="bhf"
let obj4:Objs2={
    a:'a',
    1:11,
    [symbolIndex]:Symbol()
}
*/
// 元组 和 数组 上的映射类型  会生成新的元组和数组,并不产生新的类型
/*

type MapToPromise<T>={
    [K in keyof T]:Promise<T[K]>
}
type Tuple=[number,string,boolean]
type promiseTuple=MapToPromise<Tuple>

let tuple1:promiseTuple=[
    new Promise((resolve,reject)=>resolve(1)),
    new Promise((resolve,reject)=>resolve("bhf")),
    new Promise((resolve,reject)=>resolve(false))
]
*/
// unknown
// 1.任何类型都可以赋值给unknown
/*type Tuple=[number,string,boolean]
let a:Tuple=[1,"bhf",false]
let sui1:unknown
let bian1:string|number=3
sui1=1
sui1="bhf"
sui1=false
sui1=[]
sui1={}
sui1=a
sui1=["bhf",1,false]
sui1=bian1
interface Info1 {
    name:string
}
interface Info2 {
    age:number
}
let sha:Info1 & Info2
sha={name:"bhf",age:18}*/
// 2.如果没有类型断言或基于控制流的类型细化时，unknown只能赋值给unknown 和 any
let sui1: unknown
let sui2: unknown
sui1 = sui2
let sui3: string = sui1 as string
// 3.如果没有类型断言或基于控制流的类型细化时,不能在它上面做任何操作
let sui4: unknown
// sui4+=1 ERROR
// 4.unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type ce1 = string & unknown
let ceshi1: ce1
type ce2 = string & unknown
let ceshi2: ce2
globalThis.console.log(typeof ceshi1 === typeof ceshi2)
// 5.unknown与任何其他类型（除了any是any）组成的联合类型，都等于unknown

type ce3 = unknown | string
type ce4 = unknown | any

// 6.never类型是unknown的子类型
type ce5 = never extends unknown ? string : number

// 7.keyof unknown 等于类型 never
type ce6 = keyof unknown

// 8.只能对unknown进行等于 或 不等于 操作
// 9.unknown类型的值不能访问其属性，不能作为函数调用 ，不能作为类创建实例
// 10.使用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type ce7<T> = {
    [p in keyof T]: number
}
type ce8 = ce7<any>
type ce9 = ce7<unknown>

// 条件类型
// T extends U ? x : y
/*type suiT1<T>=T extends string ? string : number
let bian1:suiT1<'1'>
bian1="b"
bian1=1*/
// 分布式条件类型
/*type TypeName<T> =
    T extends string ? string :
        T extends number ? number :
            T extends boolean ? boolean :
                T extends undefined ? undefined :
                    T extends () => void ? () => void :
                        object;

type Diff<T, U> = T extends U ? never : T
type TEST = Diff<string | number | boolean, undefined | number>

type Type<T> = {
    [K in keyof T]: T[K] extends Function ? T[K] : string
// }[keyof T]
}

interface Part {
    id: number,
    name: string,
    // subParts?: Part[],
    updatePart(newName: string): void
}

type  test = Type<Part>
let a:test={id:"bhf",name:"bhf",updatePart(newName: string): void {
        globalThis.console.log("bhf")
    }}
globalThis.console.log(a)*/
// 条件类型的 类型推断 infer
/*
type TypeName<T>=T extends any[] ? T[number] : T
type test3=TypeName<[string,number,boolean]>
let  test3:test3=false

type DefineType<T>=T extends (infer U)[] ? U :T
type suibian=DefineType<[string,number,boolean]>
let suibian:suibian=false

// Exclude<T,U> 差集
type Type10=Exclude<'a'|'b'|'c','a'|'b'>
let v10:Type10='c'
// Extract<T,U> 交集
type Type11=Extract<'a'|'b'|'c','a'|'b'>
let v11:Type11='a'
// NonNullable<T> 从T中去掉null 和 undefined
type Type12=NonNullable<string|number|undefined|null>
let v12:Type12=null
// ReturnType<T> 获取函数返回值类型
type Type13=ReturnType<()=>string>
let v13:Type13="bhf"
// InstanceType<T>
class AClass {
    constructor(){}
}
type T1 =InstanceType<typeof AClass>
type T2=InstanceType<any>
type T3=InstanceType<never>
*/









