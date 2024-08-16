import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Dashboard from '../src/pages/Dashboard/dashboard.js';
import Employees from './pages/Employees/employees.js';
import EditarEmpleado from './pages/Employees/EditEmployee.js';


function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EditarEmpleado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

