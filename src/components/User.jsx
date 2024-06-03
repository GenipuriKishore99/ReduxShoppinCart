import React, { useContext } from 'react'
import userContext from '../services/context-service'

const User = () => {

    const {name}=useContext(userContext)
  return (
    <div className='bg-dark p-2 m-2 text-white'>User:{name}</div>
  )
}

export default User