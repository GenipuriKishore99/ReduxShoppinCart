import React, { useContext, useEffect, useState } from 'react'
import userContext from '../services/context-service'

const Homec = () => {

    const {name}=useContext(userContext)

    
  return (
    <div className='bg-dark p-2 m-2 text-white'>Homec:{name}</div>
  )
}

export default Homec