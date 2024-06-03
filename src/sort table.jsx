import React, { useEffect, useState } from 'react'

function App() {
  const [data,setData]=useState([
    {id:1,name:"kishore",age:24},
    {id:2,name:"genipuri",age:25},
    {id:3,name:"anusha",age:27},
    {id:4,name:"yamani",age:5}
  ])
  const [sortby,setSortby]=useState('')

  useEffect(()=>{
    sortName()
  },[sortby])

  const sortName=()=>{
    const result=[...data].sort((a,b)=>{
      if(a[sortby]<b[sortby]){
        return -1
      }
      if(a[sortby]>b[sortby]){
        return 1
      }
      return 0;
      });
      setData(result)
  }

  const handlerChange=(e)=>{
    setSortby(e.target.value)
  }
  return (
    <div>
      <div>
        <lable>SortBy</lable>
        <label>Name</label><input type="radio" value="name" checked={sortby==='name'} onChange={handlerChange}></input>
        <label>Age</label><input type="radio" value="age" checked={sortby==='age'} onChange={handlerChange}></input>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d)=>{
              return(
                <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default App