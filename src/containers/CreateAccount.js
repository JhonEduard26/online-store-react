import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import '../styles/CreateAccount.scss'

function CreateAccount() {
  return (
    <>
      <Header />
      <div className='EditMyAccount-login'>
        <div className='EditMyAccount-form__container'>
          <h1 className='EditMyAccount-title'>My account</h1>
          <form action='/' className='EditMyAccount-form'>
            <label htmlFor='name' className='EditMyAccount-label'>
              Name
            </label>
            <input
              type='text'
              className='EditMyAccount-input EditMyAccount-input-name'
              id='name'
              placeholder='Jhon Eduard'
            />
            <label htmlFor='email' className='EditMyAccount-label'>
              Email address
            </label>
            <input
              type='email'
              className='EditMyAccount-input EditMyAccount-input-email'
              id='email'
              placeholder='youremail@mail.com'
            />
            <label htmlFor='password' className='EditMyAccount-label'>
              Password
            </label>
            <input
              type='password'
              className='EditMyAccount-input EditMyAccount-input-password'
              id='password'
              placeholder='*********'
            />
          </form>
          <Button text={'Create'} classes='primary-button save-button' />
        </div>
      </div>
    </>
  )
}

export { CreateAccount }
