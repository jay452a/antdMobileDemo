/**
 * Created by 56234 on 2018/9/10.
 */
export function addTodo(text,id) {
    return {
        type: 'ADD_TODO',
        text,
        id
    };
}
export function toggledo(text,id) {
    return {
        type: 'TOGGLE_TODO',
        text,
        id
    };
}
export function testdo(id) {
    return {
        type: 'TEST',
        id
    }
}