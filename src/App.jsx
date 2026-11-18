import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")

  // console.log(setCount);

  // useEffect(() => {
  //   console.log("імітація роботи метода componentDidMount");
    
  // }, [])


  useEffect(() => {
    console.log("імітація роботи метода componentDidUpdate");
    
  }, [count, name])


  const handleMinus = () => {
      setCount((prev) => prev - 1)
  }

  const handlePlus = () => {
      setCount((prev) => prev + 1)
  }

  const handleChange = (evt) => {
    setName(evt.target.value)
  }


  return(
    <>
      <p>{count}</p>

      <div className='box'>
        <button onClick={handleMinus} type='button'>minus</button>
        <button onClick={handlePlus} type='button'>plus</button>
      </div>

      <input onChange={handleChange} value={name} type="text" placeholder='your name'/>
      <p>Hello: {name ? name : "незнайомець"}</p>
    </>
  )
}

export default App