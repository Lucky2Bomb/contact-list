import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { REGISTER } from '../../routes'
import AuthLayout from '../Layout/AuthLayout'
import './login.scss'

function Login() {
  const navigate = useNavigate()
  return (
    <AuthLayout>
      <h1>Sign in</h1>

      <TextField
        id="login"
        label="Login"
        variant="standard"
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

      <Button variant="contained" fullWidth sx={{ mt: 3 }}>
        SIGN IN
      </Button>
      <Button
        variant="text"
        fullWidth
        sx={{ mt: 1 }}
        onClick={() => navigate(`/${REGISTER.route}`)}
      >
        SIGN UP
      </Button>
    </AuthLayout>
  )
}

export default Login
