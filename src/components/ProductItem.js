import React from 'react'
import addToCartImage from '../assets/images/bt_add_to_cart.svg'
import added from '../assets/images/bt_added_to_cart.svg'
import { AppContext } from '../context/AppContext'
import '../styles/ProductItem.scss'

function ProductItem({ product }) {
  const { addToCart } = React.useContext(AppContext)

  const handleClick = (item) => {
    addToCart(item)
  }

  return (
    <div className='ProductItem-product-card'>
      <img src={product.images[0]} alt={product.title} />
      <div className='ProductItem-product-info'>
        <div>
          <p className='ProductItem-product-price'>${product.price}</p>
          <p className='ProductItem-product-name'>{product.title}</p>
        </div>
        <figure className='ProductItem-add-to-cart' onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt='add to cart' />
        </figure>
      </div>
    </div>
  )
}

export { ProductItem }
