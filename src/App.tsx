import { Container } from '@mui/material'
import React from 'react'
import Login from './components/Login'
import './app.scss'

function App() {
  return (
    <Container maxWidth="sm" className="app_container">
      <Login />
    </Container>
  )
}

export default App
