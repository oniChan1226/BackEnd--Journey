import { useEffect, useState } from "react"
import axios from "axios"


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // CORS policy error
    axios.get("/api/users")
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>Hello</h1>
      <h1>Users: {users.length}</h1>
      {
        users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default App
