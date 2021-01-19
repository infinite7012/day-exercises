const defaultState = {
    list: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            console.log(action.data)
            return {
                ...state,
                list: action.data
            }

        case 'PUT_DATA':
            return {
                list: [
                    ...state.list,
                    {
                        positionId:new Date().getTime(),
                        positionName:action.task
                    }
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