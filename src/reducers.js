/**
 * Created by 56234 on 2018/9/10.
 */
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
    console.log(action,'redux')
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        default:
            return state
    }
}
const test = (state = 0, action) => {
    switch (action.type) {
        case 'TEST':
            return {state: action.id||0}
        default:
            return state
    }
}
const rootReducer = combineReducers({
    todos,
    test
});

export default rootReducer;
