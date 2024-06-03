import {useFormik} from 'formik';
import axios from 'axios';
import { useEffect, useState } from 'react';
export function FormCreate(){
    const [data,setData]=useState([])
    const [err,setErr]=useState('')
    const [color,setColor]=useState('')

    // useEffect(()=>{
    //     getApi();

    // },[])
    const formik=useFormik({
        initialValues:{
            "UserName":"",
            "Email":"",
            "Age":0,
            "Phone":""
        },
        onSubmit:(values)=>{

            axios({
                method:"post",
                url:"http://127.0.0.1:5000/user/",
                data:values
            })

            

            
         
            alert('data saved....!')
        }
        
    })

    function getApi(e){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/user/"
        }).then((res)=>{
            setData(res.data)
            for(var user of data){
                if(user.UserName ===e.target.value){
                    setErr("userName taken try another one");
                    setColor('text-success')
                    break;

                }
                else{
                    setErr("UserName Availbel")
                    setColor('text-danger')
                }
                
            }
        })

    }
   
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="UserName" onKeyUp={getApi} onChange={formik.handleChange}></input>
            </div>
            <div className={color}>{err}</div>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="Email" onChange={formik.handleChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Age</label>
                <input type="text" className="form-control" name="Age" onChange={formik.handleChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" name="Phone" onChange={formik.handleChange}></input>
            </div>
            <div>
                <input type="submit"className="btn btn-primary"></input>
                <input type="reset"className="btn btn-danger"></input>
            </div>
            </form>
        </div>
    )
}