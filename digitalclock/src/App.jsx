import { useState } from 'react'
import './App.css'

const App = () => {

  let time = new Date().toLocaleTimeString();
  let data = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  setInterval(UpdateTime,1000)

  return (
    <>
      <h1>Relógio digital</h1>
      <h2>{data}</h2>
      <h2>{ctime}</h2>
    </>
  )
}

export default App