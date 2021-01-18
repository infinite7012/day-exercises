const defaultState = {
    list: ['task1', 'task2']
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_Data':
            return state
        case 'PUT_DATA':
            return {
                list: [
                    ...state.list,
                    action.task
                ]
            }
        case 'REMOVE_DATA':
            let newList = state.list.filter((value, index) => {
                return index !== action.index
            })
            console.log(newList)
            return {
                ...state,
                list: newList
            }
        default:
            return state
    }
}
export default reducer