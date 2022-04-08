import React from 'react'

function useGetProduct(API) {
  const [products, setProducts] = React.useState([])

  const getData = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }

  React.useEffect(() => {
    getData()
  }, [])

  return products
}

export { useGetProduct }
