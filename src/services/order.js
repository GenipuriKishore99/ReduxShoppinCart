import { getData, getDataById, saveData,updateData } from "./context";

const url="http://localhost:3000/orders/";

export function saveOrdersData(data){
    return saveData(url,data);
}

export function getOrdersData(){
    return getData(url)
}

export function getDataOrdersId(id){
    return getDataById(url,id)
}

export function getUpdateData(id,data){
    return updateData(url,id,data)
}