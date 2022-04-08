import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../containers/Layout'
import { NewPassword } from '../containers/NewPassword'
import { EmailSend } from '../containers/EmailSend'
import { CreateAccount } from '../containers/CreateAccount'
import '../styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-password' element={<NewPassword />} />
          <Route path='/email-send' element={<EmailSend />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { App }
