/**
 * 过滤条件reducer
 *
 * @param {VISIBILITY_FILTER} [state='SHOW_ALL']
 * @param {SetVisibilityFilterAction} action
 * @returns
 */
function visibilityFilter(
  state: VISIBILITY_FILTER = 'SHOW_ALL',
  action: SetVisibilityFilterAction,
) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload;
    default:
      return state;
  }
}

export default visibilityFilter;
