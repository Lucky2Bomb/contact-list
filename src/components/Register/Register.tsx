import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN } from '../../routes'
import AuthLayout from '../Layout/AuthLayout'

function Register() {
  const navigate = useNavigate()
  return (
    <AuthLayout>
      <h1>Sign up</h1>

      <TextField
        id="login"
        label="Login"
        variant="standard"
        sx={{ mt: 1 }}
        required
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        variant="standard"
        type="password"
        autoComplete="current-password"
        sx={{ mt: 1 }}
        required
        fullWidth
      />
      <TextField
        id="confirmPassword"
        label="Confirm password"
        variant="standard"
        type="password"
        autoComplete="current-password"
        sx={{ mt: 1 }}
        required
        fullWidth
      />

      <Button variant="contained" fullWidth sx={{ mt: 3 }}>
        SIGN UP
      </Button>
      <Button
        variant="text"
        fullWidth
        sx={{ mt: 1 }}
        onClick={() => navigate(`/${LOGIN.route}`)}
      >
        SIGN IN
      </Button>
    </AuthLayout>
  )
}

export default Register
