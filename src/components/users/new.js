import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const NewUser = ({ setUsers, length }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    setUsers((prev) => [...prev, { id: length + 1, name: name, email: email }])
    navigate('/')
  }

  return (<>
    <h1>
      New User
      <form onSubmit={onSubmit}>
        Name: <input name="name" onChange={(e) => setName(e.target.value)} />
        email: <input name="email" onChange={(e) => setEmail(e.target.value)} />
        <button>Submit</button>
      </form>
    </h1>
  </>)
}

export default NewUser