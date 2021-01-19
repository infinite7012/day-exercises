const removeAction =(index)=>{
    return{
        type: 'REMOVE_DATA',
        index
    }
}

const putAction =(task)=>{
    return{
        type: 'PUT_DATA',
        task
    }
}
export {
    removeAction,
    putAction
}