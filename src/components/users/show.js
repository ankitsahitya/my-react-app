import { Alert } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ShowUser = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      console.log(res)
      setUser(res.data)
    }).catch((err) => { setError(err.data) })
  }, [])

  return (<>
    <Link to='/'>Home</Link>
    {error && <Alert message={error.message} type="error" />}

    <h1>
      User Id: {user._id}
      User Name: {user.name}
      User Email: {user.email}
      User Phone: {user.phone}
    </h1>
  </>)
}

export default ShowUser