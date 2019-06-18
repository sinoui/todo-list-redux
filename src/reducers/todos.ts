/**
 * 待办事项列表reducer
 *
 * @param {Todo[]} [state=[]]
 * @param {(AddTodoAction | ToggleTodoAction)} action
 * @returns
 */
function todos(state: Todo[] = [], action: AddTodoAction | ToggleTodoAction) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    default:
      return state;
  }
}

export default todos;
