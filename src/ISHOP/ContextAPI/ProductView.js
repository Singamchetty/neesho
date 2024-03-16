

import React, { useContext, useEffect, useState, useReducer } from 'react';
import { cartContext } from './AppCart';
import { userprofilecontext } from '../IShopIndex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductView = (props) => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [updateUserCartItems, cartItems] = useContext(cartContext)
    const [userprofile, setUserProfile] = useContext(userprofilecontext)
    useEffect(() => {
        setProduct(props.product)
    }, [props])


    function AddToCartClick() {
        notify()
        updateUserCartItems(userprofile.UserName, { product: product, quantity: quantity })
    }

    const notify = () => toast("Item Added To Cart");



    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className=" mb-4">
                <div className="card text-center" style={{ height: '450px', width: '300px' }}>
                    <img className="card-img-top" src={product.image} style={{ height: '200px' }} alt={product.title} />
                    <div className="card-header p-0" style={{ height: '120px' }}>
                        <p><span className='fw-bold'>Title:</span>{product.title}</p>
                    </div>
                    <div className="card-body p-0" style={{ height: '90px' }}>
                        <div className='d-flex justify-content-between'>
                            <div className='border w-100'>
                                <p>Price</p>
                                <p>{product.price}$</p>
                            </div>
                            <div className='border w-100'>
                                <p>Rating</p>
                                <p><span className="bi bi-star-fill">{product.rating && product.rating.rate}[<span>{product.rating && product.rating.count}</span>]</span></p>
                            </div>
                            <div className='border w-100'>
                                <p className='m-0'>Select Quantity</p>
                                <select onChange={(e) => setQuantity(parseInt(e.target.value))} className='m-2'>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer m-0 p-0">
                    <button className="btn btn-warning w-100" onClick={AddToCartClick} >
                        Add to cart <i className="bi bi-cart4"></i>
                    </button>
                    <ToastContainer />
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default ProductView;