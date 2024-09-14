import React, { useState, useEffect } from "react";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "" });

  // Cargar empleados de ejemplo cuando el componente se monta
  useEffect(() => {
    const mockEmployees = [
      { id: 1, name: "Juan Pérez", position: "Desarrollador" },
      { id: 2, name: "Ana López", position: "Diseñadora" },
      { id: 3, name: "Carlos García", position: "Gerente de Producto" },
    ];
    setEmployees(mockEmployees); // Cargar los empleados en el estado
  }, []);

  // Función para agregar un empleado
  const addEmployee = () => {
    if (newEmployee.name && newEmployee.position) {
      const newId =
        employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
      const employeeToAdd = { id: newId, ...newEmployee };
      setEmployees([...employees, employeeToAdd]);
      setNewEmployee({ name: "", position: "" }); // Limpiar el formulario
    }
  };

  // Función para eliminar un empleado
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Lista de Empleados</h2>
      {employees.length === 0 ? (
        <p>No hay empleados registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Posición</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>
                  <button onClick={() => deleteEmployee(employee.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Agregar Nuevo Empleado</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={newEmployee.name}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Posición"
        value={newEmployee.position}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, position: e.target.value })
        }
      />
      <button onClick={addEmployee}>Agregar Empleado</button>
    </div>
  );
};

export default EmployeePage;
