import React, { useRef, useState, useEffect } from 'react';
import Form, { Label, FormItem, TextInput, Select } from '@sinoui/forms';
import Button from 'sinoui-components/Button';
import { withRouter, RouteComponentProps } from 'react-router';
import useRestItemApi from '@sinoui/use-rest-item-api';
import { FormikContext } from 'formik';

interface Props
  extends RouteComponentProps<{
    id: string;
  }> {}

interface User {
  id?: string;
  userName?: string;
  age?: string;
}

function TableForm(props: any) {
  const { id } = props.match.params;

  const dataSource = useRestItemApi<User>('/users', id);
  const formRef = useRef<FormikContext<User>>();

  const onClose = () => {
    props.history.goBack();
  };

  const onOk = () => {
    dataSource.save(formRef.current!.values);
    props.history.goBack();
  };

  return (
    <Form
      name="form"
      initialValues={dataSource.data}
      formRef={(form) => (formRef.current = form)}
      enableReinitialize
      colon
      style={{ maxWidth: '500px', margin: '0 auto' }}
    >
      <p>{id ? '修改详情' : '添加'}</p>
      <FormItem>
        <Label>姓名</Label>
        <TextInput name="userName" />
      </FormItem>
      <FormItem>
        <Label>年龄</Label>
        <TextInput name="age" />
      </FormItem>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button raised color="primary" onClick={onClose}>
          关闭
        </Button>
        <Button raised color="primary" onClick={onOk}>
          确定
        </Button>
      </div>
    </Form>
  );
}

export default withRouter(TableForm);
