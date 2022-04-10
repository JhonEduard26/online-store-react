import React from 'react'
import { AppContext } from '../context/AppContext'
import { ShoppingCartItem } from '../components/ShoppingCartItem'
import arrow from '../assets/images/flechita.svg'
import '../styles/ShoppingCart.scss'

function ShoppingCart() {
  const { state } = React.useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = state.cart.reduce(reducer, 0)
    return sum
  }

  return (
    <aside className='ShoppingCart-product-detail'>
      <div className='ShoppingCart-order-container'>
        <div className='ShoppingCart-title-container'>
          <img className='ShoppingCart-arrow' src={arrow} alt='arrow' />
          <h3 className='ShoppingCart-order-title'>Shopping cart</h3>
        </div>
        {state.cart.map((product) => (
          <ShoppingCartItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className='ShoppingCart-order-details'>
          <div>
            <p className='ShoppingCart-order-date'>Total</p>
          </div>
          <p className='ShoppingCart-order-price'>${sumTotal()}</p>
        </div>
        <button className='ShoppingCart-primary-button ShoppingCart-checkout-button'>
          Checkout
        </button>
      </div>
    </aside>
  )
}

export { ShoppingCart }
