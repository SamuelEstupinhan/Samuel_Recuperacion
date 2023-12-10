import { Button, Paper, Tooltip, Box } from "@mui/material"
import Topbar from "./Topbar"
import React, { useState, useEffect } from "react";
import InformeColeccion from "./InformeColeccion";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InformeUsuarios from "./InformeUsuarios";

export default function Informes() {
  const [showColeccion, setShowColeccion] = useState(false);
  const [showUsuarios, setShowUsuarios] = useState(false);
   
  const userData = useSelector(state => state.login);
  const navigate = useNavigate();
  const isLoggedin = userData.isAutenticated;

  useEffect(() => {
    if (!isLoggedin) navigate('/');
  }, [isLoggedin, navigate]);

  return (
    <>
      <Topbar />
      <Paper style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '24px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: '24px' }}>
          <Tooltip title="Obtener Informe Colección" arrow>
            <Button variant="contained" onClick={() => setShowColeccion(!showColeccion)}>
              INFORME DE COLECCIÓN
            </Button>
          </Tooltip>
          <Tooltip title="Obtener Informe Usuarios" arrow>
            <Button variant="contained" onClick={() => setShowUsuarios(!showUsuarios)}>
              INFORME DE USUARIOS
            </Button>
          </Tooltip>
        </Box>
        <Box sx={{ width: '90%' }}>
          {showColeccion && <InformeColeccion />}
          {showUsuarios && <InformeUsuarios />}
        </Box>
      </Paper>
    </>
  );
}
