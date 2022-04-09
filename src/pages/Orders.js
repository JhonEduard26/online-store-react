import React from 'react'
import { Header } from '../components/Header'
import { OrderItem } from '../components/OrderItem'
import '../styles/Orders.scss'

function Orders() {
  return (
    <>
      <Header />
      <section class='MyOrders-my-orders'>
        <div class='MyOrders-orders-container'>
          <h3 class='MyOrders-orders-title'>My orders</h3>
          <OrderItem />
        </div>
      </section>
    </>
  )
}

export { Orders }
