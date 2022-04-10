import React from 'react'
import { DesktopMenu } from './DesktopMenu'
import { AppContext } from '../context/AppContext'
import { ShoppingCart } from '../containers/ShoppingCart'
import logo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon_menu.svg'
import iconShoppingCartNotification from '../assets/images/icon_shopping_cart_notification.svg'
import '../styles/Header.scss'

function Header() {
  const [toggle, setToggle] = React.useState(false)
  const [toggleOrders, setToggleOrders] = React.useState(false)
  const { state } = React.useContext(AppContext)

  const handleToggle = () => {
    setToggle((toggle) => !toggle)
  }
  const handleToggleOrders = () => {
    setToggleOrders((toggleOrders) => !toggleOrders)
  }

  return (
    <nav>
      <img src={iconMenu} alt='menu' className='Header-menu' />
      <div className='Header-navbar-left'>
        <img src={logo} alt='logo' className='Header-logo' />
        <ul>
          <li>
            <a href='#'>All</a>
          </li>
          <li>
            <a href='#'>Clothes</a>
          </li>
          <li>
            <a href='#'>Electronics</a>
          </li>
          <li>
            <a href='#'>Furniture</a>
          </li>
          <li>
            <a href='#'>Toys</a>
          </li>
          <li>
            <a href='#'>Others</a>
          </li>
        </ul>
      </div>
      <div className='Header-navbar-right'>
        <ul>
          <li className='Header-navbar-email' onClick={handleToggle}>
            youremail@mail.com
          </li>
          <li className='Header-navbar-shopping-cart' onClick={handleToggleOrders}>
            <img
              src={iconShoppingCartNotification}
              alt='shopping cart'
              className='Header-shopping-cart'
            />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <DesktopMenu /> : null}
      {toggleOrders ? <ShoppingCart /> : null}
    </nav>
  )
}

export { Header }
