import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { agregarEmpleado } from '../../pages/Services/employeeService'; 
import { useNavigate } from 'react-router-dom';

function AgregarEmpleado() {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    email: '',
    salary: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook de navegación

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamada a la API para agregar el empleado
      const response = await agregarEmpleado(employee);
      console.log('Empleado agregado:', response);
      navigate('/frontend/src/pages/Employees/employeesList.js'); // Redirigir a la lista de empleados
    } catch (error) {
      console.error('Error al agregar empleado:', error);
      setError('Error al agregar el empleado. Intenta de nuevo.'); // Mostrar mensaje de error
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Agregar Nuevo Empleado
      </Typography>
      {error && <Typography color="error">{error}</Typography>} {/* Mostrar error si existe */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={employee.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Posición"
          name="position"
          value={employee.position}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={employee.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Salario"
          name="salary"
          type="number"
          value={employee.salary}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          Agregar Empleado
        </Button>
      </form>
    </Box>
  );
}

export default AgregarEmpleado;