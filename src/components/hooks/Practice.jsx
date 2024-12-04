import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('blue')
    const [msg, setMsg] = useState(false)
    const handleCount = () => {
        setCount((count)=> count + 1)
    }
    const changeColor = () => {
        setColor('red')
    }
    const showAlert = () =>{
        setMsg(true)
    }
    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=> count + 1)
        }, 3000);
    }, [count])

    
  return (
    <>
      <div>
        <p>{count}</p>
        <p>{color}</p>
        <button onClick={showAlert}>AlertInfo</button>
        <button onClick={handleCount}>Count</button>
        <button onClick={changeColor}>Change color</button>
      </div>
      {msg && window.alert('Congratulations.....')}
    </>
  )
}

export default Practice
