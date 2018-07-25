import { combineReducers } from 'redux'
import toDoList from './toDoList.js'

export default combineReducers({
    toDo: toDoList
})
