import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEmpleado, editarEmpleado } from '../../pages/Services/employeeService'; // Asegúrate de que la ruta sea correcta
import { TextField, Button, Box, Typography } from '@mui/material';

function EditarEmpleado() {
  const { id } = useParams(); // Obtener el ID del empleado de la URL
  const [employee, setEmployee] = useState({ name: '', position: '', email: '', salary: '' });
  const navigate = useNavigate(); // Hook de navegación

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await obtenerEmpleado(id); // Llamada a la API para obtener el empleado
      setEmployee(data); // Establecer los datos del empleado en el estado
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editarEmpleado(id, employee); // Llamada a la API para editar el empleado
      navigate('/empleados'); // Redirigir a la lista de empleados después de editar
    } catch (error) {
      console.error('Error editing employee:', error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Editar Empleado
      </Typography>
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
          Actualizar Empleado
        </Button>
      </form>
    </Box>
  );
}

export default EditarEmpleado;