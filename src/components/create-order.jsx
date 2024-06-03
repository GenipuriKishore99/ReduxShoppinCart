import { useEffect, useState } from "react"
import { getOrdersData } from "../services/order"
import { Link } from "react-router-dom"

export function Orders(){

    const headers=["Id","Name","Price","Actions"]
    const [data,setData]=useState([])
    useEffect(()=>{
        getData();
    },[])

    function getData(){
        getOrdersData().then((res)=>{
            setData(res.data)
            // alert(JSON.stringify(res.data))
        })
    }
    return(
        <table className="table">
            <thead className="table table-primary">
                <tr>
                    {
                        headers.map((h)=>{
                            return(
                                <th>{h}</th>
                            )
                        })
                    }
                </tr>

            </thead>
            <tbody>
                {
                    data.map((d)=>{
                        return(
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.price}</td>
                                <td><Link to={'/edit/' +d.id}>Edit</Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}