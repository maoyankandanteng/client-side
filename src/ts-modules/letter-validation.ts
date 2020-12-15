// 命名空间相当于定义了一个大的对象
namespace Validation{
    export const isLetterReg=/^[A-Za-z]+$/
    export const checkLetter=(text:any)=>{
        return isLetterReg.test(text)
    }
}
