import React from 'react'
import '../styles/Button.scss'

function Button(props) {
  return (
    <button type='submit' className={props.classes}>
      {props.text}
    </button>
  )
}

export { Button }
