import React, { useContext } from 'react'
import userContext from '../services/context-service'

const Body = () => {

    const {name,setData}=useContext(userContext)
    // console.log(data)
  return (
    <div className='bg-dark p-2 m-2 text-white'>Body:
        {name}
        <div>
            <input type="text" value={name} onChange={(e)=>{setData(e.target.value)}}/>
        </div>
    </div>
  )
}

export default Body