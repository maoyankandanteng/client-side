// 命名空间相当于定义了一个大的对象
namespace Validation{
    export const isNumberReg=/^[0-9]+$/
    export const checkNumber=(text:any)=>{
        return isNumberReg.test(text)
    }
}
