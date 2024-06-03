import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './app.router'
import { Menu } from './menu';
import userContext from './services/context-service';

const App = () => {

  const [data,setData]=useState('');

    useEffect(()=>{
        const obj={
            name:"kishore"
        }
        setData(obj.name)

    },[])
  return (
    <div>
      <userContext.Provider value={{name:data,setData}}>
      <BrowserRouter>
      <Menu/>
      <AppRouter/>
      </BrowserRouter>
      </userContext.Provider>
    </div>
  )
}

export default App