import React, { useContext, useState } from 'react';
import { productContext } from './AppCart';
import ProductView from './ProductView';

const ProductsView = () => {
const [products,setProducts]=useContext(productContext)
    return (
      <div className='container'>
   <div className="row" style={{ height: '600px' }}>
      {products && products.map((product) => (  <ProductView key={product.id} product={product} /> ))}
    </div>
      </div>

   
    );
};

export default ProductsView;