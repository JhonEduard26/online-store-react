import React from 'react'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import logo from '../assets/images/logo.svg'
import '../styles/Login.scss'

function Login() {
  const form = React.useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data)
  }

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
      <div className='Login-login'>
        <div className='Login-form__container'>
          <img src={logo} alt='logo' className='Login-logo' />
          <form action='/' className='Login-form' ref={form}>
            <label htmlFor='email' className='Login-label'>
              Email address
            </label>
            <input
              type='email'
              className='Login-input Login-input-email'
              name='email'
              placeholder='youremail@mail.com'
            />
            <label htmlFor='password' className='Login-label'>
              Password
            </label>
            <input
              type='password'
              className='Login-input Login-input-password'
              name='password'
              placeholder='*********'
            />
            <Button text={'Log in'} classes={'primary-button login-button'} />
            <a onClick={handleSubmit} className='Login-link' href='#'>
              Forgot my password
            </a>
          </form>
          <Button text={'Sign up'} classes={'secondary-button signup-button'} />
        </div>
      </div>
    </>
  )
}

export { Login }
