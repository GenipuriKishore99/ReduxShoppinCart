import React, { useState } from 'react'

function App() {
  const [data,setData]=useState('');
  function handlerBlur(){
    setData(data.toUpperCase())

  }

  function handleChange(e){
    setData(e.target.value)
  }
  return (
    <div>
      <label>Caps</label>
      <input type="text" value={data} onBlur={handlerBlur} onChange={handleChange}></input>
    </div>
  )
}

export default App