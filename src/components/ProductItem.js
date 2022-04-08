import React from 'react'
import addToCart from '../assets/images/bt_add_to_cart.svg'
import addedToCart from '../assets/images/bt_added_to_cart.svg'
import '../styles/ProductItem.scss'

function ProductItem({ product }) {
  const [cart, setCart] = React.useState(addToCart)

  const handleClick = () => {
    setCart(addedToCart)
  }

  return (
    <div className='ProductItem-product-card'>
      <img src={product.images[0]} alt={product.title} />
      <div className='ProductItem-product-info'>
        <div>
          <p className='ProductItem-product-price'>${product.price}</p>
          <p className='ProductItem-product-name'>{product.title}</p>
        </div>
        <figure className='ProductItem-add-to-cart' onClick={handleClick}>
          <img src={cart} alt='add to cart' />
        </figure>
      </div>
    </div>
  )
}

export { ProductItem }
