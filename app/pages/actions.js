import * as todoListData from '../res/test-todo-list.json';
export const TODO_LIST_GET = 'GET_TODO_LIST';

export function getTodoList() {
    return (dispatch) => {
        dispatch({ type: TODO_LIST_GET, data: todoListData.todoList });
    }
}