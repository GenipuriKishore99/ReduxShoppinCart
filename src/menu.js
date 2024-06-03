import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./services/context-service";

export function Menu(){

    const {name}=useContext(userContext)
    return(
        <div className="bg-dark text-white p-3 d-flex justify-content-center">
            <Link to="/home" className="me-3">Home</Link>
            <Link to="/body"  className="me-3">Body</Link>
        <Link to="/test" className="me-3">Test</Link>   
        <Link to="/user" className="me-3 text-decoration-none text-white">User:{name}</Link>   
        </div>
    )
}