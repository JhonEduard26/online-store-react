import React from 'react'
import '../styles/Skeleton.scss'

function Skeleton() {
  return (
    <div className='productSkContainer'>
      <div className='productSkImg'></div>
      <div className='productSkDescription'>
        <div className='productSkDetails'>
          <div></div>
          <div></div>
        </div>
        <div className='productSkAddCart'></div>
      </div>
    </div>
  )
}

export { Skeleton }
