import { Container } from '@mui/material'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './app.scss'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { HOME, LOGIN, REGISTER } from './routes'

function App() {
  return (
    <Container maxWidth="sm" className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME.route}
            element={
              <>
                <Link to={LOGIN.route}>login</Link>
                <Link to={REGISTER.route}>register</Link>
              </>
            }
          />
          <Route path={LOGIN.route} element={<Login />} />
          <Route path={REGISTER.route} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
