// 枚举就是一个字典
// 支持：数字 和 字符串
// 可以赋值：计算值 或 常量(枚举成员必须具初始化表达式)
/*const test=3
const getIndex=()=>{
    return 4
}
enum Status{
    Uploading,
    Success=getIndex(),
    Failed=2
}
enum Flag{
    Success=3,
    // 数字枚举  可以 引用其他枚举值
    Failed=Status.Failed
}
globalThis.console.log(Status.Success)
// globalThis.console.log(Status[''])

// 反向映射
globalThis.console.log(Status)

// 字符串枚举
enum Message {
    Error='Sorry',
    Success='Hoho',
    Failed=Error
}
enum Information{
    // 但是字符串枚举不可以
    // one=Message.Success,
    two='hello',
    three='three'
}
globalThis.console.log(Message)

// 异构枚举
enum Result{
    Failed=1,
    Success="success"
}
globalThis.console.log(Result)
// 枚举成员类型  和 联合枚举类型
// enum E{A}
// enum E{ A='abc' }
// enum E{ A=-1 } 所以值都是“数值字面量'
enum Animals{
    Dog="abc",
    Cat="def"
}
interface Dog {
    type:Animals.Dog
}

const dog:Dog={
    type:Animals.Dog
}*/
// 联合类型  string | number

/*enum Status{
    Off,
    On
}
interface Light {
    status:Status
}
const light:Light={
    status:Status.On
}*/

/*
const enum Animals{
    Dog,
    Cat
}
*/
















