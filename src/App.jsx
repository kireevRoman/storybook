import { useState } from 'react'
import { UserCard } from './components/UserCard/UserCard'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <UserCard id={1} username="John Doe" description="Лучший работник месяца" style={{width: '500px'}} onDelete={(value) => console.log(value)}/>
     <p>-</p>
     <UserCard id={2} username="John Doe" description="Лучший работник месяца" typeCard={'block'} onDelete={(value) => console.log(value)} />
    </div>
  )
}

export default App
