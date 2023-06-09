import { Alert, Button, Form, Input } from "antd"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const NewUser = () => {
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const onFinish = (values) => {
    axios.post('http://localhost:3000/users', values).then((res) => {
      navigate('/')
    }).catch((err) => {
      setError(err.response.data)
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (<>
    {error && <Alert message={error.message} type="error" />}
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone No."
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>)
}

export default NewUser