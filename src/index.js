var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triangle = /** @class */ (function () {
            function Triangle() {
            }
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        var Squire = /** @class */ (function () {
            function Squire() {
            }
            return Squire;
        }());
        Polygons.Squire = Squire;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
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
// 解决深层次嵌套 取值的问题
/// <reference path="./space.ts"/>
var polygons = Shapes.Polygons;
var triangle = new polygons.Triangle();
