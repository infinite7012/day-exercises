const defalutState={
    count:0
}
const reducer= (state=defalutState,action)=>{
    action=action||{type:''}
    switch (action.type) {
        case 'increment':
            return{
                ...state,
                count:state.count+1
            }
        case 'decrement':
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state;
    }
}
export default reducer