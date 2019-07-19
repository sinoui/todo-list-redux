import React, { useState, useEffect } from 'react';
import Form, { Label, FormItem, TextInput, Select } from '@sinoui/forms';
import Button from 'sinoui-components/Button';
import axios from 'axios';
// import TextInput from 'sinoui-components/TextInput';
import { Row, Column } from 'sinoui-components/Grid';
import { withRouter } from 'react-router';

function TableForm(props: any) {
  const onClose = () => {
    props.history.goBack();
  };

  const [items, setItems] = useState({ userName: '', age: '' });

  const id = props.match.params.id;
  useEffect(() => {
    if (id) {
      axios.get('/users/form').then((result) => {
        setItems(result.data);
      });
    }
  }, []);

  const [values, setValues] = useState({});

  const onOk = () => {
    axios.post('/users/form/submit', values).then((result) => {});
    props.history.goBack();
  };

  return (
    <Form
      name="form"
      initialValues={props.items}
      formRef={(form) => setValues(form.values)}
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
