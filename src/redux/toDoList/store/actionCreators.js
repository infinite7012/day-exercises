const removeAction =(index)=>{
    return{
        type: 'REMOVE_DATA',
        index
    }
}

const putDataAction =(task)=>{
    return{
        type: 'PUT_DATA',
        task
    }
}

const setDataAction =(data)=>{
    return{
        type: 'SET_DATA',
        data
    }
}

const loadDataAction =()=>{
    return dispatch=>{
        fetch('/position.json')
        .then(response=>response.json())
        .then(result=>{
            dispatch(setDataAction(result.result))
        })
    }
}
export {
    removeAction,
    putDataAction,
    setDataAction,
    loadDataAction
}