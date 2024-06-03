import React, { useContext } from 'react'
import userContext from '../services/context-service'

const Test = () => {

    const {name}=useContext(userContext);
  return (
    <div className='bg-dark p-2 m-2 text-white'>Test:{name}</div>
  )
}

export default Test