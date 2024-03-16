import React, { useContext } from 'react';
import { productContext } from './AppCart'; 

export default function Categories(props) {
  function handleCategoryChange(value){
    props.handleCategory(value)
  }



    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-evenly p-3 bg-light">
                 <button className="border border-0 bg-white" onClick={() => handleCategoryChange('all')}>All Products</button>
                <button className="border border-0 bg-white" onClick={() => handleCategoryChange('electronics')}>Electronics</button>
                <button className="border border-0 bg-white" onClick={() => handleCategoryChange('jewelery')}>Jewelery</button>
                <button className="border border-0 bg-white" onClick={() => handleCategoryChange('men\'s clothing')}>Men's Clothing</button>
                <button className="border border-0 bg-white"onClick={() => handleCategoryChange('women\'s clothing')}>Women's Clothing</button>
            </div>
        </div>
    );
}
