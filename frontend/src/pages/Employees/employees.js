import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import EmployeesList from './employeesList';
import AddEmployee from './AddEmployee';

function Employees() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="employee management tabs">
          <Tab label="Lista de Empleados" />
          <Tab label="Agregar Empleado" />
        </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {tabValue === 0 && <EmployeesList />}
        {tabValue === 1 && <AddEmployee />}
      </Box>
    </Box>
  );
}

export default Employees;