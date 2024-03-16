import { useCookies } from "react-cookie"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppCart from "./ContextAPI/AppCart";
import axios from "axios";
import { useContext } from "react";
import { userprofilecontext } from "./IShopIndex";


export default function IShopDashboard(){
    const [cookies,setCookie,removeCookie]=useCookies();
    const [categories,setCategories]=useState([]);
    const [userprofile,setUserProfile]=useContext(userprofilecontext) 

let navigate=useNavigate(); 




    useEffect(()=>{
        if(cookies["username"]==undefined){
            navigate("/home");
        }

    },[cookies])


    return(
        <div>
            <AppCart/>
        </div>
    )
}