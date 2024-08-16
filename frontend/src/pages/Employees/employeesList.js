import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Typography 
} from '@mui/material';
import { obtenerEmpleados, eliminarEmpleado } from '../../pages/Services/employeeService'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate(); // Hook de navegación

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await obtenerEmpleados(); // Llamada a la API para obtener empleados
        setEmployees(response); // Establecer la lista de empleados
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      try {
        await eliminarEmpleado(id); // Llamada a la API para eliminar empleado
        setEmployees(employees.filter(employee => employee.id !== id)); // Actualizar la lista local
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lista de Empleados
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Posición</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="small" 
                    onClick={() => navigate(`/frontend/src/pages/Employees/employees.js/${employee.id}`)} // Navegar a detalles
                  >
                    Ver
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    style={{ marginLeft: 8 }} 
                    onClick={() => navigate(`/empleados/editar/${employee.id}`)} // Navegar a editar
                  >
                    Editar
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    size="small" 
                    style={{ marginLeft: 8 }} 
                    onClick={() => handleDelete(employee.id)} // Eliminar empleado
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmployeesList;