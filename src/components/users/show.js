import { Link, useParams } from "react-router-dom"

const ShowUser = ({ users }) => {
  const { id } = useParams()
  const user = users.find(user => user.id === parseInt(id))
  return (<>
    <Link to='/'>Home</Link>

    <h1>
      User Id: {id}
      User Name: {user.name}
      User Email: {user.email}
    </h1>
  </>)
}

export default ShowUser