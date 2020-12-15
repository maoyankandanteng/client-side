/*setTimeout(()=>{
    globalThis.console.log(1)
},1000)
globalThis.console.log(2)*/

/*
function getIndexPromise(flag) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            globalThis.console.log(1)
            if(flag){resolve('a')}
            else{
                reject(Error("错误"))
            }
        },1000)
    })
}
// getIndexPromise(false).then((res)=>{
//     globalThis.console.log(res)
// }).catch((error)=>{
//     globalThis.console.log(error)
// })

async function asyncFunc() {
    try {
        const res=await getIndexPromise(false)
        globalThis.console.log(res)
    }catch (error) {
        globalThis.console.log(error)
    }
}
asyncFunc()
*/
/*
interface Res {
    data: {
        [key: string]: any
    }
}

namespace axios {
    export function post(url: string, config: object): Promise<Res> {
        return new Promise<Res>(((resolve, reject) => {
            setTimeout(() => {
                const res: Res = {data: {}}
                if (url === '/login') res.data.userid = 111
                else res.data.role = 'admin'
                globalThis.console.log(2)
                resolve(res)
            },3000)
        }))
    }
}

interface Info {
    username: string
    password: string
}

async function loginReq({username, password}: Info) {
    try {
        globalThis.console.log(1)
        // await 只能在async函数中使用
        const res = await axios.post('/login', {data: {username, password}})
        globalThis.console.log(3)
        return res
    } catch (e) {
        throw new Error(e)
    }
}
async function getRoleReq(userid:number){
    try {
        const res = await axios.post('/getRole', {data: {userid}})
        return res
    } catch (e) {
        throw new Error(e)
    }
}

loginReq({username:"白海峰",password:"123"}).then(res=>{
    const {data:{userid}}=res
    getRoleReq(userid).then(result=>{
        const {data:{role}}=result
        globalThis.console.log(role)
    })
})
*/
/*// 弱类型
interface ObjIn {
    name?:string
    age?:number
}
let ObjIn={
    sex:'male'
}
function printInfo(info:ObjIn) {
    globalThis.console.log(info)
}
printInfo(ObjIn as ObjIn)*/
/*

// 在泛型中使用拓展运算符...
function mergeOptions<T,U extends string>(op1:T,op2:U) {
    return{...op1,op2}
}
globalThis.console.log(mergeOptions({a:'a'},'name'))
*/
function getExcludeProp<T extends {props:string}>(obj:T) {
    const {props,...rest}=obj
    globalThis.console.log(props)
    return rest
}
const oINfo={
    props:'some',
    name:'白海峰',
    age:18
}
globalThis.console.log(getExcludeProp(oINfo))


















