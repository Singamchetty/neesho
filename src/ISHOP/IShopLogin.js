import { Link , useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState,useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import { userprofilecontext } from "./IShopIndex";
import { usersContext } from "./IShopIndex";

export default function IShopLogin(){
    let navigate=useNavigate()
const [users,setUsers]=useContext(usersContext);
const [cookies ,setCookie,removeCookie]=useCookies()
const [userprofile,setUserProfile]=useContext(userprofilecontext) 

const formik =useFormik({
    initialValues :{
        UserName:'',
        Password:''
    },
    onSubmit:values=>{
    for (var user of users){
        if(user.UserName==values.UserName && user.Password==values.Password && values.UserName!=="" && values.Password!==""){
            setCookie("username",user.UserName);
            setUserProfile(user)
            navigate("/dashboard");
            break;
        }else{
            navigate("/errorpage");
        }
    }
    }
})
 useEffect(()=>{
    axios.get("https://neeshoserver.netlify.app/.netlify/functions/api/getusers")
    .then(response=>{
        setUsers(response.data);
    })

 },[])

    return(
       <div className="d-flex justify-content-center align-items-center bg-secondary" style={{height:'600px'}}>
         <div className="border p-2 border-light text-white" >
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dt><input value={formik.values.UserName} name="UserName" onChange={formik.handleChange} type="text"/> </dt>
                    <dt>Password</dt>
                    <dt><input value={formik.values.Password} name="Password"  onChange={formik.handleChange}  type="password"/> </dt>
                </dl>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <br/>
            <Link to="/register"><span className="text-white">New User?</span></Link>
        </div>
       </div>
    )
}