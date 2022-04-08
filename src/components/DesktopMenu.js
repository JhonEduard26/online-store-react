import React from 'react'
import '../styles/DesktopMenu.scss'

function DesktopMenu() {
  return (
    <div className='DesktopMenu-desktop-menu'>
      <ul>
        <li>
          <a href='#'>My orders</a>
        </li>
        <li>
          <a href='#'>My account</a>
        </li>
        <li>
          <a href='#'>Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export { DesktopMenu }
