import Categories from './Categories';
import React, { useContext, useState } from 'react';
import { cartContext, productContext } from './AppCart';
import ProductView from './ProductsView';
import ViewCart from './ViewCart';


const Nav = () => {
  const [cartproducts,setCartProducts]=useContext(cartContext)
  // const [product,setProduct]=useContext(productContext)
  const [searchResults, setSearchResults] =useState('')
  const [searchQuery,setSearchQuery]=useState('')



  return (
    <div>
      <div className="container-fluid">
        {/* <h1 className="text-center">Neesho</h1> */}
        <div>
          <nav className=" " >
            {/* <a className="navbar-brand text-white">Neesho</a> */}
            <div className='d-flex justify-content-end mt-2'>
            <ViewCart/>
            </div>
            
          </nav>
        </div>
      </div>
      
    </div>
  );
  }

export default Nav;
