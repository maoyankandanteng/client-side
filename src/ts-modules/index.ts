// 内部模块module--命名空间namespace，外部模块---模块export
// 还可以导出类型别名和接口
// import {name as NAME} from './b'
// globalThis.console.log(NAME)

// import * as info from './b'
// globalThis.console.log(info)

// import * as AData from './a'
// globalThis.console.log(AData)

// 直接导出，的引入
// import name from './c'
// globalThis.console.log(name)

// import {name} from './c'
// globalThis.console.log(name)

// 解决ES6 和 Node 默认导出不兼容
// import name=require("./c");
// globalThis.console.log(name)

// example:引入moment
// import moment from 'moment'
// import * as moment from "moment";
// import moment=require("moment");
//
// globalThis.console.log(moment)


// 命名空间:作用和使用场景，和模块的区别
// 程序内部防止全局污染的时候，想把相关的内容放到一起的时候 命名空间
// 封装 了一个工具或者库，适用于模块系统中引入的时候，模块


/*/// <reference path="./number-validation.ts"/>
let isLetter=Validation.checkLetter("abc")
globalThis.console.log(isLetter)*/
// outFile 用来指定输出的文件名

/*/// <reference path="./number-validation.ts"/>
/// <reference path="./letter-validation.ts"/>
let isLetter=Validation.checkLetter("abc")
globalThis.console.log(isLetter)
let isNumber=Validation.checkLetter("abc")
globalThis.console.log(isNumber)*/

/*// 解决深层次嵌套 取值的问题
/// <reference path="./space.ts"/>
import polygons=Shapes.Polygons
let triangle=new polygons.Triangle()*/

// 模块解析
// 相对导入   /(根目录) 和 ./(当前目录) 和 ../(上级目录)
// 非相对导入 baseUrl  或 路径映射,还可以被解析成外部模块声明，使用非相对路径来导入你的外部依赖
// baseUrl 所有非相对模块导入都会被当做相对于 baseUrl。
// 相对模块的导入不会被设置的baseUrl所影响，因为它们总是相对于导入它们的文件。

// paths: 请注意"paths"是相对于"baseUrl"进行解析

// rootDirs指定虚拟目录

// tsc --traceResolution启用编译器的模块解析跟踪
// --noResolve编译选项告诉编译器不要添加任何不是在命令行上传入的文件到编译列表















