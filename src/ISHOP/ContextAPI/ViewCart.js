
import { useCookies } from "react-cookie";
import axios from "axios";
import React, { useContext, useState ,useEffect} from 'react';
import { cartContext } from './AppCart';
import { userprofilecontext } from "../IShopIndex";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ViewCart = () => {
    let navigate=useNavigate()
    const [cookies,setCookie,removeCookie]=useCookies();
    const [userprofile,setUserProfile]=useContext(userprofilecontext)
    const [updateUserCartItems,cartItems,setCartItems,deleteUserCartItems] = useContext(cartContext)
    function decreaseQuantity(product, e) {
            updateUserCartItems(userprofile.UserName, {product:product,quantity:-1})
    }
    function increaseQuantity(product, e) {

        updateUserCartItems(userprofile.UserName, {product:product,quantity:1})
    }
    function deleteClick(item) {
        notify()
        deleteUserCartItems(userprofile.UserName, item)
    }
    const notify = () => toast("Item Deleted From Cart");

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (cookies["username"] === undefined) {
              navigate("/home");
            } else {
              const response = await axios.get('https://neeshoserver.netlify.app/.netlify/functions/api/getusers');
              const Data = await response.data; 
              const userProfileData=Data.map((user)=>{
                if(user.UserName==cookies.username)
                setCartItems(user.CartItems)
              })
            }
          } catch (error) {
            console.error("Error fetching user profile:", error);
            navigate("/login");
          }
        };
    
        fetchData();
      }, [cookies, navigate, setUserProfile]);

    return (
        
          userprofile &&  <div className=''>
            <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className='bi bi-cart4'></span>Cart<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {/* {cartProducts.length} */}
                   {
                    cartItems && <span> {cartItems.length}</span>
                   }
                </span>
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart View</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <table style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>Preview</th>
                                            {/* <th>Title</th> */}
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems && cartItems?.map((item) => (
                                                <tr key={item.id}>
                                                    <td><img src={item.image} height={50} width={50} /></td>
                                                    {/* <td>{item.title}</td> */}
                                                    <td>{item.price}</td>
                                                    <td className='d-flex'> <button id={item.id} type='button' onClick={(e) => increaseQuantity(item, e)} className="bi bi-plus btn btn-danger"></button>
                                                        <button className='btn bg-transparent fw-bold' type='button'>{item.qty}</button>
                                                        {(item.qty == 1) ? null : <button id={item.id} type='button' onClick={(e) => decreaseQuantity(item, e)} className="bi bi-dash  btn btn-danger"></button>
                                                        }
                                                    </td>

                                                    <td>{(item.qty * item.price).toFixed(1)}</td>
                                                    <td>
                                                        <button onClick={(e) => deleteClick(item)} className="btn btn-danger bi bi-trash-fill" type="button"></button>
                                                        <ToastContainer />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" disabled data-bs-dismiss="modal">CheckOut</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ViewCart;