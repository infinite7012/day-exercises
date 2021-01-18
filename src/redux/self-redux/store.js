import changeState from "./changeState";
//定义初始状态
let state={
    count:0
}
// 定义一个方法，用于集中管理state和dispatch
const createStore=()=>{
    const getState=()=>state
    const listeners=[]
    const subscribe=(listener)=>listeners.push(listener)

    const dispatch=(action)=>{
        state=changeState(state,action)
        listeners.forEach(listener=>listener())
    }
    return{
        getState,
        subscribe,
        dispatch
    }
}
const store=createStore()
//DOM操作
const render=()=>{
    let countEle=document.querySelector('#count')
    countEle.innerHTML=store.getState().count
}

store.subscribe(render)
export default store