import { Grid, Paper } from '@mui/material'
import React from 'react'
import './login.scss'

function Login() {
  return (
    <Grid
      container
      direction="column-reverse"
      justifyContent="center"
      alignItems="center"
      className="app_container"
    >
      <Paper elevation={15} className="login">
        Sign in
      </Paper>
    </Grid>
  )
}

export default Login
