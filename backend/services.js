// src/services/empleadoService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/empleados'; // Cambia la URL según tu configuración

// Función para obtener todos los empleados
export const obtenerEmpleados = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Función para agregar un nuevo empleado
export const agregarEmpleado = async (empleado) => {
  const response = await axios.post(API_URL, empleado);
  return response.data;
};

// Función para editar un empleado
export const editarEmpleado = async (id, empleado) => {
  const response = await axios.put(`${API_URL}/${id}`, empleado);
  return response.data;
};

// Función para eliminar un empleado
export const eliminarEmpleado = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};