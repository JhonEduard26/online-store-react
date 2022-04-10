import React from 'react'
import { AppContext } from '../context/AppContext'
import iconClose from '../assets/images/icon_close.png'
import '../styles/ShoppingCartItem.scss'

function ShoppingCartItem({ product }) {
  const { removeFromCart } = React.useContext(AppContext)

  const handleRemove = (product) => {
    removeFromCart(product)
  }

  return (
    <div className='ShoppingCartItem-shopping-cart'>
      <img src={product.images[0]} alt='product image' />
      <span className='ShoppingCartItem-product-name'>{product.title}</span>
      <p className='ShoppingCartItem-product-price'>${product.price}</p>
      <img
        className='ShoppingCartItem-shopping-close'
        src={iconClose}
        alt='close'
        onClick={() => handleRemove(product)}
      />
    </div>
  )
}

export { ShoppingCartItem }
