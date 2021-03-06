/// <reference types="react-scripts" />

/**
 * 待办事项
 */
interface Todo {
  id: number;
  /**
   * 标题
   */
  text: string;
  /**
   * 是否已完成
   */
  completed?: boolean;
}

/**
 * 应用状态
 *
 * @interface State
 */
interface State {
  /**
   * 待办列表
   */
  todos: Todo[];
  /**
   * 可见性过滤条件
   */
  visibilityFilter: VISIBILITY_FILTER;
}

/**
 * 添加待办事项动作
 */
interface AddTodoAction {
  type: 'ADD_TODO';
  /**
   * 需要添加的待办事项对象
   */
  payload: TODO;
}

/**
 * 设置过滤条件动作
 */
interface SetVisibilityFilterAction {
  type: 'SET_VISIBILITY_FILTER';
  /**
   * 过滤条件
   */
  payload: VISIBILITY_FILTER;
}

/**
 * 切换待办事项状态的动作
 *
 * @interface ToggleTodoAction
 */
interface ToggleTodoAction {
  type: 'TOGGLE_TODO';
  /**
   * 需要切换状态的待办事项id
   */
  payload: number;
}

/**
 * 可见性过滤条件
 *
 * * SHOW_ALL - 显示全部
 * * SHOW_ACTIVE - 显示未完成的待办事项
 * * SHOW_COMPLETED - 显示已完成的待办事项
 */
type VISIBILITY_FILTER = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

/**
 * 删除所有已完成的列表
 */

interface DeleteCompleteAction {
  type: 'DELETE_COMPLETE';
  payload: string;
}

/**
 * 更新待办事项标题
 */
interface UpdateTitleAction {
  type: 'UPDATE_TITLE';
  payload: number;
  text: string;
}
