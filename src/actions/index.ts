let nextTodoId = 0;
const ADD_TODO = 'ADD_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const TOGGLE_TODO = 'TOGGLE_TODO';

/**
 * 创建添加待办事项的动作
 *
 * @param text 待办事项标题
 */
function addTodo(text: string) {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text,
    },
  };
}

/**
 * 创建设置可见性过滤条件的动作
 *
 * @param filter 过滤条件
 */
function setVisibilityFilter(filter: VISIBILITY_FILTER) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter,
  };
}

/**
 * 创建切换待办事项状态的动作
 *
 * @param id 待办事项id
 */
function toggleTodo(id: number) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
};
