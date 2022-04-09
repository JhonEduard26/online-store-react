import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Orders } from '../pages/Orders'
import { Layout } from '../containers/Layout'
import { NewPassword } from '../containers/NewPassword'
import { EmailSend } from '../containers/EmailSend'
import { CreateAccount } from '../containers/CreateAccount'
import { AppContext } from '../context/AppContext'
import { useInitialState } from '../hooks/useInitialState'
import '../styles/global.css'

function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/new-password' element={<NewPassword />} />
            <Route path='/email-send' element={<EmailSend />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export { App }
