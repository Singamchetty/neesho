import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import axios from "axios";
import { useEffect,useState ,useContext} from "react";
import { usersContext } from "./IShopIndex";


export default function IShopRegister(){
    let navigate=useNavigate();
    const [users,setUsers]=useContext(usersContext);
    function VerifyDetails(userDetails){
        const errors={};
        for(var user of users){
            if(userDetails.UserName==""){
                errors.UserName="User Name Required";
            }else if(userDetails.UserName.length<4){
                errors.UserName="Name is too short";
            }else if(userDetails.UserName.length>10){
                errors.UserName="Name is too long";
            }else if(userDetails.UserName==user.UserName){
                errors.UserName="Username already exists";
            }
            if(userDetails.Email==""){
                errors.Email=" Email required";
            }else if(userDetails.Email.indexOf("@")<=2){
                errors.Email="Invalid Email";
            }else if(userDetails.Email==user.Email){
                errors.Email="Email already exists";
            }
            if(userDetails.Mobile==""){
                errors.Mobile="Mobile Number required";
            } 
            else if(!userDetails.Mobile.match(/\+91\d{10}/))
             {
                errors.Mobile="Invalid Mobile Sample : +919876543210";
            }else if(userDetails.Mobile==user.Mobile){
                errors.Mobile="Number Already registered";
            }
        }

        if(userDetails.Age==""){
            errors.Age="Age required";
        }else if(isNaN(userDetails.Age)){
            errors.Age="Age must be a number"
        }
       
        if(userDetails.Password==""){
            errors.Password="password required";
        }else if (!userDetails.Password.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,10})$/)) {
            errors.Password="Must Contain atleaast one Capital alphabet/n password length between 6 to 10 characters, one special character";
        } 
        
        return errors;
    }

    const formik=useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            Email:'',
            Mobile:'',
            Password:'',
            CartItems:[]
            },
            validate:VerifyDetails,
            onSubmit: values=>{
                axios.post("https://neeshoserver.netlify.app/.netlify/functions/api/registeruser",values)
                // alert("Register Successfully");
                navigate("/login")
            }
        })

        useEffect(()=>{
            axios.get("https://neeshoserver.netlify.app/.netlify/functions/api/getusers")
            .then(response=>{
                setUsers(response.data);
            })
        
         },[])


    return(
        <div  className="d-flex justify-content-center align-items-center bg-secondary" style={{height:'700px'}}>
            <div className="border p-2 border-light text-white">
            <h2> Register New User</h2>
            <form onSubmit={formik.handleSubmit} style={{width:'300px'}}>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName} /></dd>
                <dd className="text-warning">{formik.errors.UserName}</dd>
                <dt>Age</dt>
                <dd><input type="text" name="Age" onChange={formik.handleChange}  value={formik.values.Age} /></dd>
                <dd className="text-warning">{formik.errors.Age}</dd>
                <dt>Email</dt>
                <dd><input type="email" name="Email" onChange={formik.handleChange} value={formik.values.Email}  /></dd>
                <dd className="text-warning">{formik.errors.Email}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile}  /></dd>
                <dd className="text-warning">{formik.errors.Mobile}</dd>
                <dt>Password</dt>
                <dd><input type="text" name="Password" onChange={formik.handleChange} value={formik.values.Password}  /></dd>
                <dd className="text-warning" style={{maxContent:'fit-content'}}>{formik.errors.Password}</dd>
            </dl>
                <button className="btn btn-danger" type="submit" >Register</button>
        <br/>
        <Link to="/login" ><span className="text-white" style={{listStyleType:'none'}}>Already have account?</span></Link>
            </form>

        </div>
        </div>
    )
}