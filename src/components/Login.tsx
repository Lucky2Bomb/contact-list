import { Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import './login.scss'

function Login() {
  return (
    <Grid
      container
      direction="column-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={15} className="login">
        <h1>Sign in</h1>
        <TextField
          id="login"
          label="login"
          variant="standard"
          required
          fullWidth
        />
        <TextField
          id="password"
          label="password"
          variant="standard"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
        />
      </Paper>
    </Grid>
  )
}

export default Login
