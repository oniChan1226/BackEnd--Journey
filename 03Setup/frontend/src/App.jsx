import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
      const res = await axios.get("/api/users");
      console.log(res.data)
      setUsers(res.data);
    }

  if(users.length <= 0) {
    return (
      <div>
        Get Users <button onClick={fetchUsers}>Get Em</button>
      </div>
    )
  }

  return (
    <>
      {
        users.map((user) => (
          <div key={user.id}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Age: {user.age}</div>
            <div>Role: {user.role}</div>
            <div>Active: {user.active}</div>
          </div>
        ))
      }
    </>
  )
}

export default App
