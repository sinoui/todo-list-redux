import React, { useState } from 'react';
import useRestTable from '@sinoui/use-rest-table';
import DataTable, { TableColumn } from '@sinoui/data-table';
import { withRouter } from 'react-router';
import Button from 'sinoui-components/Button';
import SearchForm from './SearchForm';
import axios from 'axios';

function ListDemo(props: any) {
  const dataSource = useRestTable('/users', [], { keyName: 'userId' });

  const onRowClick = (event: any, id: string, item: {}) => {
    props.history.push(`/duty-detail/form/${id}`);
  };

  const onAdd = () => {
    props.history.push('/duty/form');
  };

  const onDelete = () => {
    dataSource.remove(dataSource.selectedRows.map((row) => row['userId']));
  };

  return (
    <>
      <SearchForm dataSource={dataSource} />
      <div>
        <Button raised color="primary" onClick={onAdd}>
          添加
        </Button>
        {dataSource.selectedRows.length > 0 && (
          <Button raised color="primary" onClick={onDelete}>
            删除
          </Button>
        )}
      </div>
      <DataTable {...dataSource} onRowClick={onRowClick}>
        <TableColumn name="userName" width={100} title="姓名" />
        <TableColumn name="age" width={100} title="年龄" />
      </DataTable>
    </>
  );
}

export default withRouter(ListDemo);
