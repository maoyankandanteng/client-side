// globalThis.console.log("白海峰")

// export type FuncInterface=(arg:number)=>string
export interface FuncInterface {
    name:string,
    (arg:number):string
}
export class AClass {
    constructor(){}
}
class BClass {
    constructor(){}
}
export {BClass as BDefineClass}
// export * from './b'
// export {name} from './b'
// export {name as NAME} from './b'
