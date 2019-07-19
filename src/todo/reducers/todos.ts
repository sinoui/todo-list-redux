/**
 * 待办事项列表reducer
 */

export default function todos(
  state: Todo[] = [],
  action:
    | AddTodoAction
    | ToggleTodoAction
    | DeleteCompleteAction
    | UpdateTitleAction,
) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case 'DELETE_COMPLETE':
      return action.payload === 'DELETE_COMPLETE'
        ? state.filter((todo) => !todo.completed)
        : [];
    case 'UPDATE_TITLE':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, text: action.text } : todo,
      );
    default:
      return state;
  }
}
