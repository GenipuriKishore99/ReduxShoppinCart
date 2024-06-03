import { useEffect, useRef, useState } from "react";
import { getDataOrdersId, getUpdateData, saveOrdersData } from "../services/order";
import { useParams } from "react-router-dom";

export function Form(){

    const [btn,setBtn]=useState('')

    const nameref=useRef();
    const priceref=useRef();

    const params=useParams();

    useEffect(()=>{
        if(params.id){
            setBtn("Update")
            getOrdersId(params.id);

        }else{
            setBtn("create")

        }
           
    },[]);

    function getOrdersId(id){
        getDataOrdersId(id).then((res)=>{
            // alert(res)
            nameref.current.value=res.data.name;
            priceref.current.value=res.data.price;
        })
       
    }

    function saveDataToDb(){
        if(params.id){
            let obj={
                "id":params.id,
                'name':nameref.current.value,
                'price':priceref.current.value
            }
            getUpdateData(params.id,obj).then(()=>{
                alert("data is updates...!")
            })
            window.location.reload();a

        }else{
        let obj={
            'name':nameref.current.value,
            'price':priceref.current.value
        }
        saveOrdersData(obj).then(()=>{
            alert('Data savedd...')
        })
        // alert(JSON.stringify(obj))
    }
}

    return(
        <div className="m-2">
            <form onSubmit={()=>{saveDataToDb()}}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" ref={nameref}></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" ref={priceref}></input>
                </div>
                <div className="m-2">
                    <input type="submit" value={btn} className="btn btn-primary"></input>
                    <input type="reset" value="cancel" className="btn btn-danger ms-2"></input>
                </div>
            </form>
        </div>
    )
}