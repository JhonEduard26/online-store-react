import React from 'react'
import '../styles/NewPassword.scss'
import logo from '../assets/images/logo.svg'
import { Header } from '../components/Header'

function NewPassword() {
  const [isTablet, setTablet] = React.useState(window.innerWidth > 767)

  const updateMedia = () => {
    setTablet(window.innerWidth > 767)
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  return (
    <>
      {isTablet ? <Header /> : null}
      <div className='NewPassword-login'>
        <div className='NewPassword-form__container'>
          <img src={logo} alt='logo' className='NewPassword-logo' />
          <h1 className='NewPassword-title'>Create a new password</h1>
          <p className='NewPassword-subtitle'>Enter a new password for you account</p>
          <form action='/' className='NewPassword-form'>
            <label htmlFor='password' className='NewPassword-label'>
              Password
            </label>
            <input
              type='password'
              className='NewPassword-input input-password'
              id='password'
              placeholder='*********'
            />
            <label htmlFor='new-password' className='NewPassword-label'>
              Re-enter password
            </label>
            <input
              type='password'
              className='NewPassword-input NewPassword-input-password'
              id='new-password'
              placeholder='*********'
            />
            <input
              type='submit'
              value='Confirm'
              className='NewPassword-primary-button NewPassword-login-button'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export { NewPassword }
