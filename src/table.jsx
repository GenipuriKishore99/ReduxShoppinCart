import axios from "axios"
import { useEffect, useState } from "react"

export function Table(){
    const [data,setData]=useState([])

    useEffect(()=>{
        dataGet();

    },[])

    function dataGet(){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/user/"
        })
        .then((res)=>{
            setData(res.data)
        })
    }
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            data.map((m)=>{
                                return(
                                    <tr>
                                        <td>{m.id}</td>
                                        <td>{m.UserName}</td>
                                        <td>{m.Email}</td>
                                        <td>{m.Age}</td>
                                        <td>{m.Phone}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}