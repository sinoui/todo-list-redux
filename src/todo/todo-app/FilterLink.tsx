import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../actions';

interface Props {
  /**
   * 过滤条件
   */
  filter: VISIBILITY_FILTER;
  /**
   * 链接显示的内容
   */
  children: React.ReactNode;
}

/**
 * 过滤链接组件
 */

function FilterLink(props: Props) {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: State) => state.visibilityFilter);
  const isActive = currentFilter === props.filter;

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(setVisibilityFilter(props.filter));
  };

  if (isActive) {
    return <span>{props.children}</span>;
  }

  return (
    <a href={`#${props.filter}`} onClick={handleClick}>
      {props.children}
    </a>
  );
}

export default React.memo(FilterLink);
