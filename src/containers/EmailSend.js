import React from 'react'
import '../styles/EmailSend.scss'
import logo from '../assets/images/logo.svg'
import imgEmail from '../assets/images/email.svg'
import { Button } from '../components/Button'
import { Header } from '../components/Header'

function EmailSend() {
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
      <div className='EmailSend-login'>
        <div className='EmailSend-form__container'>
          <img src={logo} alt='logo' className='EmailSend-logo' />
          <h1 className='EmailSend-title'>Email has been sent!</h1>
          <p className='EmailSend-subtitle'>
            Please check your inbox for instructions on how to reset the password
          </p>
          <div className='EmailSend-email-img'>
            <img src={imgEmail} alt='email-send' className='EmailSend-email-logo' />
          </div>
          <Button text={'Login'} classes={'primary-button login-button'} />
          <p className='EmailSend-resend'>
            <span> Didn't receive the email?</span>
            <a href='#'>Resend</a>
          </p>
        </div>
      </div>
    </>
  )
}

export { EmailSend }
