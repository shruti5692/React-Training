import {useState} from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [name,setName] = useState('');
  return (
    <div>
    <Card title="Card1" name={name} setName={setName}/>
    {/* <p>Inside parent component value of name: {name}</p> */}
    <Card title="Card2" name={name} setName={setName}/>
    </div>
  )
}

export default App
