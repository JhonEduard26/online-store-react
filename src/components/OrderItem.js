import React from 'react'
import arrow from '../assets/images/flechita.svg'
import '../styles/OrderItem.scss'

function OrderItem() {
  return (
    <div className='OrderItem-orders-details'>
      <div>
        <p className='OrderItem-orders-date'>02.20.2021</p>
        <p className='OrderItem-orders-quantity'>6 articles</p>
      </div>
      <div>
        <p className='OrderItem-orders-price'>$ 120.00</p>
        <img className='OrderItem-arrow-icon' src={arrow} alt='arrow' />
      </div>
    </div>
  )
}

export { OrderItem }
