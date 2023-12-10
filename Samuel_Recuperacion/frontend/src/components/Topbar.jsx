import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { Button, Container, Toolbar, AppBar, Box } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginActions } from '../store/storelogin';
import { Tooltip } from "@mui/material";

export default function Topbar() {
  const userData = useSelector(state => state.login);
  const dispatch = useDispatch();
  
  return(
    <AppBar position='static'>
      <Container>
        <Toolbar sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box>
            {userData.userRol === 'admin' && <AddModeratorIcon />}
            {userData.userRol === 'invitado' && <InsertEmoticonIcon />}
            {userData.userRol === 'user' && <AccountCircleIcon />}
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3
          }}>
            <Link to='/home' style={{ TextDecoration: 'none', color: 'white' }}>Inicio</Link>
            {userData.userRol === 'admin' && <Link to='/informes' style={{ TextDecoration: 'none', color: 'white' }}>Informes</Link>}
            {userData.userRol === 'admin' && <Link to='/gesuser' style={{ TextDecoration: 'none', color: 'white' }}>Gestión usuarios</Link>}
            <Link to={'/Samuel.pdf'} target="_blank" style={{ TextDecoration: 'none', color: 'white' }}>Ayuda</Link>
          </Box>
          <Box>
            <Tooltip title="Volver al login" arrow>
              <Button variant="contained" onClick={() => dispatch(loginActions.logout())}>
                Salir
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
