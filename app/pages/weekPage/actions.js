import * as todoListData from '../../res/test-todo-list.json';
export const TODO_LIST_GET = 'GET_TODO_LIST';

export function getTodoList() {
    return (dispatch) => {
        // setTimeout(() => {
        // console.log(todoListData)
        dispatch({ type: TODO_LIST_GET, data: todoListData.todoList });
        // }, 1000);
    }
}