import { Link, useNavigate } from "react-router-dom"

const Users = ({ users }) => {
  const navigate = useNavigate()
  return (<>
    <h1>
      Users
    </h1>
    <Link to='/new'>New User</Link>
    <table>
      <tr>
        <th>
          Name
        </th>
        <th>
          Email
        </th>
        <th>
          Action
        </th>
      </tr>
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><button onClick={() => navigate(`/edit`)}>Show</button></td>
        </tr>
      ))}
    </table>
  </>)
}

export default Users