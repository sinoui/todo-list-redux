import React from 'react';
import FilterLink from './FilterLink';
import Button from './Button';

const Footer = () => (
  <>
    <p>
      显示: <FilterLink filter="SHOW_ALL">所有</FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">未完成</FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
    </p>
    <p>
      <Button title="删除已完成" filter="DELETE_COMPLETE" />
      <Button title="删除所有" filter="DELETE" />
    </p>
  </>
);

export default React.memo(Footer);
