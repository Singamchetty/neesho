import { Link } from "react-router-dom";
import ISHOPCAROUSEL from "./ISHOPCAROUSEL";

export default function IShopHome(){
    return(
        <div className="m-0">
             {/* <nav className="col-12 d-flex">
        <div>
           <Link className="btn btn-danger w-100" to="/home">Home</Link> 
        </div>
        <div>
           <Link className="btn btn-danger w-100 ms-2" to="/register">Register</Link> 
        </div>
        <div>
           <Link className="btn btn-danger w-100 ms-3 " to="/login">Login</Link> 
        </div>
        <div>
           <Link className="btn btn-danger ms-4 w-100" to="/dashboard">Dashboard</Link> 
        </div>
        </nav>
            <h2>Shopping Home</h2>
            <Link to="/register">Register</Link>
            <span>|</span>
            <Link to="/login">Existing</Link> */}
            <ISHOPCAROUSEL/>
            
        </div>
    )
}