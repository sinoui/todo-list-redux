import { TableList, TableForm } from './use-rest-table-source';

const routes = [
  { path: '/', title: '列表', component: TableList },
  { path: '/duty/form', title: '添加', component: TableForm },
  { path: '/duty-detail/form/:id', title: '修改', component: TableForm },
];

export default routes;
