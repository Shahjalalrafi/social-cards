import './App.css';
import { useEffect, useState } from 'react';
import SocialCard from './SocialCard'

function App() {
  const [users, setUsers] = useState([])
  const [Allusers, setAllUsers] = useState([])

  useEffect(() => {
    
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      setAllUsers(data.results)
      setUsers(data.results)
    })
  },[])

  const handleInput = event => {
    const value = event.target.value.toLowerCase()
    const filtered = Allusers.filter(user => {
      return (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value))
    })

    setUsers(filtered)
  }

  return (
    <div className="App">
      <h1>Social cards</h1>
      <input className='search' type="text" placeholder="search..." onInput={handleInput} />
      <div className='card-container'>
      {
        users.map((user, index) => (
          <SocialCard userdata= {user} key={index}></SocialCard>
        ))
      }
      </div>
    </div>  
  );
}

export default App; 
