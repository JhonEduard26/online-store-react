import React from 'react'
import { ProductItem } from '../components/ProductItem'
import { useGetProduct } from '../hooks/useGetProducts'
import '../styles/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

function ProductList() {
  const products = useGetProduct(API)

  return (
    <section className='ProductList-main-container'>
      <div className='ProductList-cards-container'>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}

export { ProductList }
