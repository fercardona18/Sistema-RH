import React from 'react';
import { Grid, Paper, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate

function Dashboard() {
  const navigate = useNavigate(); // Hook para la navegación

  const navigateTo = (path) => {
    navigate(path); // Navega a la ruta especificada
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#1976d2', color: '#fff' }}>
            <Typography variant="h6">Total Empleados</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#388e3c', color: '#fff' }}>
            <Typography variant="h6">Vacaciones Pendientes</Typography>
            <Typography variant="h4">15</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#fbc02d', color: '#fff' }}>
            <Typography variant="h6">Permisos Este Mes</Typography>
            <Typography variant="h4">8</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#d32f2f', color: '#fff' }}>
            <Typography variant="h6">Nómina Total</Typography>
            <Typography variant="h4">Q250,000</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Navegación
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigateTo('/Employees')} sx={{ margin: 1 }}>
          Empleados
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigateTo('/vacaciones')} sx={{ margin: 1 }}>
          Vacaciones
        </Button>
        <Button variant="contained" color="success" onClick={() => navigateTo('/asistencia')} sx={{ margin: 1 }}>
          Asistencia
        </Button>
        <Button variant="contained" color="warning" onClick={() => navigateTo('/beneficios')} sx={{ margin: 1 }}>
          Beneficios
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;