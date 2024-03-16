
import { useCookies } from "react-cookie";
import axios from "axios";
import React from 'react';
import { useContext,useEffect } from "react";
import { userprofilecontext } from "./IShopIndex";
import { useNavigate } from 'react-router-dom';

const IShopProfile = () => {
    let navigate=useNavigate()
    const [cookies,setCookie,removeCookie]=useCookies();
    const [userprofile,setUserProfile]=useContext(userprofilecontext) 
    useEffect(() => {
        const fetchData = async () => {
          try {
            if (cookies["username"] === undefined) {
              navigate("/home");
            } else {
            //   setUserId(cookies["username"]);
              // Fetch user profile data from the server
              const response = await axios.get('https://neeshoserver.netlify.app/.netlify/functions/api/getusers');
              const Data = await response.data; // Adjust this based on your API response structure
              const userProfileData=Data.map((user)=>{
                 if(user.UserName==cookies.username)
                 setUserProfile(user);
              })

            }
          } catch (error) {
            console.error("Error fetching user profile:", error);
            // Handle error or redirect to login page
            navigate("/login");
          }
        };
    
        fetchData();
      }, [cookies, navigate, setUserProfile]);
   
    return (
        <div>
          <button type="button" className="btn btn-primary p-2 position-relative" data-bs-toggle="modal" data-bs-target="#profilemodal">
                <span className='bi bi-person-circle'></span>User Profile<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                </span>
            </button>
           
          <div className="modal fade" id="profilemodal" aria-labelledby="profilemodalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="profilemodalLabel">User Profile</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <table className="table table-striped fs-5">
                            <thead>
                            <tr>
                                <th colSpan={2}>User Profile</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>User Name</td>
                                    <td>{userprofile && userprofile.UserName}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{userprofile && userprofile.Email}</td>
                                </tr>
                                <tr>
                                    <td>Mobile</td>
                                    <td>{userprofile && userprofile.Mobile}</td>
                                </tr>
                            </tbody>
                            
                           </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IShopProfile;