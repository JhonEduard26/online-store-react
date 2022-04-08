import React from 'react'
const productImg =
  'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
import addToCart from '../assets/images/bt_add_to_cart.svg'
import addedToCart from '../assets/images/bt_added_to_cart.svg'
import '../styles/ProductItem.scss'

function ProductItem() {
  const [cart, setCart] = React.useState(addToCart)

  const handleClick = () => {
    setCart(addedToCart)
  }

  return (
    <div className='ProductItem-product-card'>
      <img src={productImg} alt='product image' />
      <div className='ProductItem-product-info'>
        <div>
          <p className='ProductItem-product-price'>$120,00</p>
          <p className='ProductItem-product-name'>Round shelf</p>
        </div>
        <figure className='ProductItem-add-to-cart' onClick={handleClick}>
          <img src={cart} alt='' />
        </figure>
      </div>
    </div>
  )
}

export { ProductItem }
