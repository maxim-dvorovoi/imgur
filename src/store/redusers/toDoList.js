export default function toDoList (state = [], action) {
    if (action.type === 'ADD_ELEMENT') {
        return [...state, action.payload]
    }
    if (action.type === 'DELETE_ELEMENT') {
        state.splice(action.payload, 1)
        return [...state]
    }
    if (action.type === 'EDIT_VALUE') {
        state[action.payload.index] = action.payload.value
        return [...state]
    }
    return state
}
