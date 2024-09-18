import React, { useState } from "react";
import "./EmployeePage.css";
import NavBar from "../../components/NavBar/NavBar";
import AddEmployeeModal from "../../components/modals/AddEmployeeModal.jsx";
import EditEmployeeModal from "../../components/modals/EditEmployeeModal.jsx";
import useEmployee from "../../hooks/useEmployee";

const EmployeePage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const {
    employees,
    handleAddEmployee,
    handleDeleteEmployee,
    handleUpdateEmployee,
  } = useEmployee();

  const handleEditEmployee = (employee) => {
    setEditEmployee(employee);
    setShowEditModal(true);
  };

  const handleSaveEditEmployee = (updatedEmployee) => {
    handleUpdateEmployee(updatedEmployee);
    setShowEditModal(false);
  };

  const handleAddNewEmployee = (newEmployee) => {
    handleAddEmployee(newEmployee);
    setShowAddModal(false);
  };

  return (
    <section className="employeeSection">
      <NavBar />

      <div className="employeeContainer">
        <h1>Employee Managment </h1>
        <div className="content">
          <div className="contentHeader">
            <h2>Empleados</h2>
            <button id="addButton" onClick={() => setShowAddModal(true)}>
              Agregar Empleado
            </button>
          </div>

          {employees.length === 0 ? (
            <p>No hay empleados registrados.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>DNI</th>
                  <th>Fecha Nacimiento</th>
                  <th>Tipo de Trabajo</th>
                  <th>Posición</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dni}</td>
                    <td>{employee.birthDate}</td>
                    <td>{employee.jobType}</td>
                    <td>{employee.position}</td>
                    <td className="botonesTabla">
                      <button
                        className="botonEliminar"
                        onClick={() => handleDeleteEmployee(employee.id)}
                      >
                        Eliminar
                      </button>
                      <button onClick={() => handleEditEmployee(employee)}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <AddEmployeeModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddNewEmployee}
      />
      {editEmployee && (
        <EditEmployeeModal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          employee={editEmployee}
          onSave={handleSaveEditEmployee}
        />
      )}
    </section>
  );
};

export default EmployeePage;
