/**
 * redux
 */

let nextTodoId = 0;

/**
 * 创建添加待办事项的动作
 */
function addTodo(text: string): AddTodoAction {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text,
    },
  };
}

/**
 * 创建设置可见性过滤条件的动作
 */
function setVisibilityFilter(
  filter: VISIBILITY_FILTER,
): SetVisibilityFilterAction {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: filter,
  };
}

/**
 * 创建切换待办事项状态的动作
 */

function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
}

/**
 * 删除所有已完成的列表
 */
function deleteCompleted(filter: string): DeleteCompleteAction {
  return {
    type: 'DELETE_COMPLETE',
    payload: filter,
  };
}

/**
 * 更新待办事项标题
 */

function updateTitle(id: number, text: string) {
  return {
    type: 'UPDATE_TITLE',
    payload: id,
    text,
  };
}

export {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
  deleteCompleted,
  updateTitle,
};
