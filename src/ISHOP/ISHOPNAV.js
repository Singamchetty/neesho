import React,{useState,useEffect} from 'react';
import { useCookies } from "react-cookie"
import { BrowserRouter,Route,Routes,Link ,useNavigate} from "react-router-dom";
import ISHOPCAROUSEL from './ISHOPCAROUSEL';
import IShopProfile from './IShopProfile';

const ISHOPNAV = () => {
    const [cookies,setCookie,removeCookie]=useCookies();
    const [userid,setUserId]=useState('');
    let navigate=useNavigate()

function handleSignout(){
    removeCookie("username");
    setUserId("")
    navigate("/home")
}
// function handleSignIn(){
//     navigate("/login")
// }
useEffect(()=>{
    if(cookies["username"]==undefined){
        navigate("/home");
    }else{
        setUserId(cookies["username"]);
    }

},[])
    return (
        <div className='m-0'>
             <header className=" text-white text-center p-0 d-flex justify-content-lg-between align-items-center flex-wrap" style={{backgroundColor:"plum"}}>
        <h1 className='p-2'>Neesho-Online Store  </h1>
        <div className=""> <span>{(cookies["username"]==undefined)?(<span><Link to="/login"><button  className="btn  btn-warning">SignIn</button></Link> <Link to="/register"><button  className="btn btn-warning ">New User</button> </Link></span>):( <span className='d-flex'><IShopProfile/><Link to="/home"><button onClick={handleSignout} className="btn btn-warning ">SignOut</button></Link></span>)}</span>  </div>
            </header>
        </div>
    );
};

export default ISHOPNAV;