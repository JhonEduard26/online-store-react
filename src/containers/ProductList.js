import React from 'react'
import { ProductItem } from '../components/ProductItem'
import '../styles/ProductList.scss'

function ProductList() {
  return (
    <section className='ProductList-main-container'>
      <div className='ProductList-cards-container'>
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  )
}

export { ProductList }
