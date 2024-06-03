import axios from 'axios';

export function saveData(url,data){
    return axios.post(url,data)
}

export function getData(url){
    return axios.get(url)
}

export function getDataById(url, id){
    return axios.get(url+id);
}

export function updateData(url,id,data){
    return axios.put(url+id,data)
}

function deleteData(){
    return axios.delete()
}