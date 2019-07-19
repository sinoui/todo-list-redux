import React, { useState } from 'react';
import { Row, Column } from 'sinoui-components/Grid';
import TextInput from 'sinoui-components/TextInput';
import Button from 'sinoui-components/Button';

export default function SearchForm(props: any) {
  const { dataSource } = props;

  const [val, setVal] = useState({ userName: '', age: '' });

  const onChange = (name: string, event: any) => {
    setVal({ ...val, [name]: event.target.value });
  };

  const onReset = () => {
    setVal({ userName: '', age: '' });
  };

  const onSearch = () => {
    dataSource.query(val);
  };

  return (
    <>
      <Row gutter={24}>
        <Column flex={10}>
          姓名：
          <TextInput
            value={val.userName}
            name="userName"
            onChange={(event) => onChange('userName', event)}
          />
        </Column>
        <Column flex={10}>
          年龄：
          <TextInput
            value={val.age}
            name="age"
            onChange={(event) => onChange('age', event)}
          />
        </Column>
        <Column flex={4}>
          <Button raised color="primary" onClick={onSearch}>
            查找
          </Button>
          <Button raised color="primary" onClick={onReset}>
            重置
          </Button>
        </Column>
      </Row>
    </>
  );
}
