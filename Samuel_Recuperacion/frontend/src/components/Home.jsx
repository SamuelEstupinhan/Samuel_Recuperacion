import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tooltip, Button, TextField, Paper, Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Topbar from "./Topbar"
import { API_URL } from "../config/config";

export default function Home() {
  const userData = useSelector(state => state.login);
  const navigate = useNavigate();
  const isLoggedin = userData.isAutenticated;
  const [item, setItem] = useState({ nombre: '', marca: '', tipo: '', precio: '' });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    !isLoggedin ? navigate('/') : handleSelectItem();
  }, [isLoggedin, navigate]);

  const handleSaveItem = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        handleSelectItem();
        setItem({ nombre: '', marca: '', tipo: '', precio: '' });
      })
      .catch(err => console.log(err))
  }

  const handleSelectItem = (e) => {
    fetch(`${API_URL}/getItems`)
      .then(response => response.json())
      .then(response => setTableData(response.data))
      .catch(err => console.log(err))
  }


  const handleDeleteItem = (id) => {
    fetch(`${API_URL}/deleteItem?id=${id}`)
      .then(response => response.json())
      .then(() => handleSelectItem())
      .catch(err => console.log(err))
  }

  console.log(userData);

  return (
    <>
      <Topbar />
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ marginBottom: '24px' }}>
          <Box
            component="form"
            autoComplete="off"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              padding: 2
            }}
          >
            <TextField
              label="Nombre"
              required
              value={item.nombre}
              onChange={(event) => setItem({ ...item, nombre: event.target.value })}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Marca"
              required
              value={item.marca}
              onChange={(event) => setItem({ ...item, marca: event.target.value })}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Tipo"
              required
              value={item.tipo}
              onChange={(event) => setItem({ ...item, tipo: event.target.value })}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Precio"
              required
              value={item.precio}
              onChange={(event) => setItem({ ...item, precio: event.target.value })}
              sx={{ marginBottom: 2 }}
            />
          </Box>
          {userData.userRol !== 'invitado' && (
            <Tooltip title="Añadir registro" style={{
              display: 'flex',
              width: '25%',
              margin: 'auto'
            }} arrow>
              <Button type="submit" variant="contained" onClick={handleSaveItem}>Insertar</Button>
            </Tooltip>
          )}
        </Box>
        <TableContainer>
          <Table aria-label="tabla">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell style={{ color: 'white' }}>Nombre</TableCell>
                <TableCell style={{ color: 'white' }}>Marca</TableCell>
                <TableCell style={{ color: 'white' }}>Tipo</TableCell>
                <TableCell style={{ color: 'white' }}>Precio</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ padding: '20px' }}>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell></TableCell>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.marca}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  <TableCell>
                    {userData.userRol === 'admin' && (
                      <Tooltip title="Borrar" arrow>
                        <Button onClick={() => handleDeleteItem(row.id)}>
                          <DeleteForeverIcon />
                        </Button>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
