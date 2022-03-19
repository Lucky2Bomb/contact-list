import { Grid, Paper } from '@mui/material'
import React from 'react'
import './authLayout.scss'

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="auth"
    >
      <Paper elevation={10} className="login" sx={{ p: 5 }}>
        {children}
      </Paper>
    </Grid>
  )
}

export default AuthLayout
