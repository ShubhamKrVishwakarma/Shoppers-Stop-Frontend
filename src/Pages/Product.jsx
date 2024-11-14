import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox.jsx';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
    </div>
  )
}

export default Product
