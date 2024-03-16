import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import Categories from './Categories';
import Nav from './Nav';
import ProductsView from './ProductsView';
import { useContext } from "react";
import { userprofilecontext } from "../IShopIndex";

export const productContext = createContext();
export const cartContext = createContext();

export default function AppCart() {
  const [cartItems, setCartItems] = useState([])
  const [cartProducts, dispatch] = useReducer(cartReducer, [])
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userprofile, setUserProfile] = useContext(userprofilecontext)

  const updateUserCartItems = async (userName, cartitems) => {
    // const {product,quantity}=cartitems

    const url = `https://neeshoserver.netlify.app/.netlify/functions/api/updateUserCart/${userName}`;

    try {
      const response = await axios.put(url, { cartitems });
      const data = await response.data.updatedCartItems
      setCartItems(data)
      // Handle the response accordingly
      console.log(response.data.message); // Log the success message
    } catch (error) {
      // Handle errors
      console.error('Error updating user cart:', error.message);
    }
  };

  const deleteUserCartItems = async (userName, product) => {
    const url = `https://neeshoserver.netlify.app/.netlify/functions/api/deleteUserCart/${userName}`;
    try {
      const response = await axios.put(url, { Product: product });
      const data = await response.data.updatedCartItems
      setCartItems(data)
      // Handle the response accordingly
      console.log(response.data.message); // Log the success message
    } catch (error) {
      // Handle errors
      console.error('Error updating user cart:', error.message);
    }
  };
  // updateUserCartItems(userprofile.UserName, cartProducts);


  function cartReducer(cartProducts, action) {
    const product = action.payload.product;
    const quantity = parseInt(action.payload.quantity)
    if (action.type == 'ADD_TO_CART') {
      const existingProduct = cartProducts.find(item => item.id == product.id)
      if (existingProduct) {
        return cartProducts.map((pro) => {
          if (pro.id == existingProduct.id) {
            return ({ ...pro, qty: pro.qty + quantity })
          }
          else {
            return ({ ...pro })
          }
        })
      }
      else {
        return ([...cartProducts, { ...product, qty: quantity }])
      }
    }

    if (action.type == 'INCREASE') {
      const existingProduct = cartProducts.find(item => item.id == product.id)
      if (existingProduct) {
        return cartProducts.map((pro) => {
          if (pro.id == existingProduct.id) {
            return ({ ...pro, qty: pro.qty + quantity })
          }
          else {
            return ({ ...pro })
          }

        })
      }
    }

    if (action.type == 'DECREASE') {
      const existingProduct = cartProducts.find(item => item.id == product.id)
      if (existingProduct) {
        return cartProducts.map((pro) => {
          if (pro.id == existingProduct.id) {
            return ({ ...pro, qty: pro.qty - quantity })
          }
          else {
            return ({ ...pro })
          }

        })
      }
    }

    if (action.type == 'DELETEITEM') {
      return cartProducts.filter((item) => {
        return item.id !== product.id
      })

    }
  }

  function handleCategory(category) {
    setSelectedCategory(category)
  }

  useEffect(() => {
    if (selectedCategory == 'all') {
      fetchData('https://neeshoserver.netlify.app/.netlify/functions/api/getproducts')
      
    } else {
      fetchData(`https://neeshoserver.netlify.app/.netlify/functions/api/getproducts/category/${selectedCategory}`)
    }
  }, [selectedCategory]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    setCartItems(userprofile.CartItems)
  }, [])

  return (

    <cartContext.Provider value={[updateUserCartItems, cartItems,setCartItems, deleteUserCartItems]}>
      <Nav />


      <productContext.Provider value={[products, setProducts]}>
        <Categories handleCategory={handleCategory} />
        <ProductsView />
      </productContext.Provider>


    </cartContext.Provider >



  );
}

