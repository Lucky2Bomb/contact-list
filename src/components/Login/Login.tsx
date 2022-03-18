import { Button, Grid, Paper, TextField } from '@mui/material'
import './login.scss'

function Login() {
  return (
    <Grid
      container
      direction="column-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={10} className="login" sx={{ p: 5 }}>
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

        <Button variant="contained" fullWidth sx={{ mt: 3 }}>
          SIGN IN
        </Button>
        <Button variant="text" fullWidth sx={{ mt: 1 }}>
          SIGN UP
        </Button>
      </Paper>
    </Grid>
  )
}

export default Login
