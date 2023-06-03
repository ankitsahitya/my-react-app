import { Button, Col, Row, Table } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Users = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/users', {
      headers: {
        Authorization: localStorage.getItem('auth-token')
      }
    }).then((res) => {
      console.log(res)
      setUsers(res.data)
    }).catch((err) => { setError(err.data) })
  }, [])

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Phone No.',
    dataIndex: 'phone',
    key: 'phone',
  }, {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Button type="primary" title="Show" onClick={() => navigate(`/${record._id}`)}>Show</Button>
    )
  }]

  return (
    <>
      <Row>
        <Col span={16}>
          <h1>
            User
          </h1>
        </Col>
        <Col span={8}>
          <Link type="button" to="/new">New User</Link>
        </Col>
      </Row>
      {error &&
        <Row>
          <Col span={16}>
            <span>
              {error.message}
            </span>
          </Col>
        </Row>
      }
      <Row>
        <Col span={24}>
          <Table dataSource={users} columns={columns} />
        </Col>
      </Row>
    </>
  )
}

export default Users