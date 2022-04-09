import React from 'react'

const initialState = {
  cart: [],
}

function useInitialState() {
  const [state, setState] = React.useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state, payload],
    })
  }

  return {
    state,
    addToCart,
  }
}

export { useInitialState }
