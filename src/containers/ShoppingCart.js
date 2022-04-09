import React from 'react'
import { OrderItem } from '../components/OrderItem'
import '../styles/ShoppingCart.scss'

function ShoppingCart() {
  return (
    <aside className='ShoppingCart-product-detail'>
      <div className='ShoppingCart-order-container'>
        <div className='ShoppingCart-title-container'>
          <img className='ShoppingCart-arrow' src='./assets/icons/flechita.svg' alt='arrow' />
          <h3 className='ShoppingCart-order-title'>Shopping cart</h3>
        </div>
        <OrderItem />
        <div className='ShoppingCart-order-details'>
          <div>
            <p className='ShoppingCart-order-date'>Total</p>
          </div>
          <p className='ShoppingCart-order-price'>$ 560.00</p>
        </div>
        <button className='ShoppingCart-primary-button ShoppingCart-checkout-button'>
          Checkout
        </button>
      </div>
    </aside>
  )
}

export { ShoppingCart }
