import { useState } from 'react';
import { Typography, Box, TextField, Paper, Grid, Avatar, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/storelogin';
import { API_URL } from '../config/config';
import Button from '@mui/material/Button';

const spacingMargin = {
  margin: '8px',
};

const spacingStyles = {
  ...spacingMargin,
  width: '95%'
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({ user: '', pwd: '' });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login');

    try {
      const response = await fetch(`${API_URL}/login?user=${data.user}&password=${data.pwd}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData && responseData.data && responseData.data.nombre !== undefined) {
        console.log(responseData.data.nombre);
        console.log(responseData.data.rol);

        console.log('entro y ahora navego');
        dispatch(loginActions.login({
          name: responseData.data.nombre,
          rol: responseData.data.rol
        }));

        navigate('/home');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return(
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid
        item
        component={Paper}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        xs={10}
        sm={8}
        md={6}
        style={{
          maxWidth: '500px',
          paddingTop: '10px',
        }}
      >
        <Avatar variant="solid" style={spacingMargin} />
        <Typography align="center">Acceder</Typography>
        <Box
          onSubmit={handleSubmit}
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={spacingStyles}
          width="100%"
        >
          <TextField
            id="usuario"
            label="Usuario"
            variant="outlined"
            style={spacingStyles}
            value={data.user}
            onChange={(event) => {
              setData({ ...data, user: event.target.value });
            }}
          />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            style={spacingStyles}
            value={data.pwd}
            onChange={(event) => setData({ ...data, pwd: event.target.value })}
          />
          <Tooltip title="Acceder" arrow>
            <Button type="submit" variant="contained" style={spacingStyles}>
              Entrar
            </Button>
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  );
}
