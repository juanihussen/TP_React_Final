import React, { useState, useEffect } from "react";
import "./EmployeePage.css";
import NavBar from "../../components/NavBar/NavBar";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dni: "",
    birthDate: "",
    jobType: "oficina",
    position: "Desarrollador de Software",
  });

  const [editEmployee, setEditEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    dni: "",
    birthDate: "",
    jobType: "oficina",
    position: "Desarrollador de Software",
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const mockEmployees = [
      {
        id: 1,
        firstName: "Juan",
        lastName: "Pérez",
        email: "juan.perez@mail.com",
        dni: "12345678",
        birthDate: "1985-01-15",
        jobType: "oficina",
        position: "Desarrollador de Software",
      },
      {
        id: 2,
        firstName: "Ana",
        lastName: "López",
        email: "ana.lopez@mail.com",
        dni: "87654321",
        birthDate: "1990-02-25",
        jobType: "remoto",
        position: "Diseñadora UX/UI",
      },
    ];
    setEmployees(mockEmployees);
  }, []);

  const addEmployee = () => {
    if (newEmployee.firstName && newEmployee.lastName && newEmployee.email) {
      const newId =
        employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
      const employeeToAdd = { id: newId, ...newEmployee };
      setEmployees([...employees, employeeToAdd]);
      setNewEmployee({
        firstName: "",
        lastName: "",
        email: "",
        dni: "",
        birthDate: "",
        jobType: "oficina",
        position: "Desarrollador de Software",
      });
      setShowAddModal(false);
    }
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const openEditModal = (employee) => {
    setEditEmployee(employee);
    setShowEditModal(true);
  };

  const saveEditEmployee = () => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === editEmployee.id ? editEmployee : emp
    );
    setEmployees(updatedEmployees);
    setShowEditModal(false);
  };

  return (
    <section>
      <NavBar />
      <div className="employeeContainer">
        <div className="content">
          <h2>Lista de Empleados</h2>
          {employees.length === 0 ? (
            <p>No hay empleados registrados.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
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
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dni}</td>
                    <td>{employee.birthDate}</td>
                    <td>{employee.jobType}</td>
                    <td>{employee.position}</td>
                    <td>
                      <button onClick={() => deleteEmployee(employee.id)}>
                        Eliminar
                      </button>
                      <button onClick={() => openEditModal(employee)}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <button onClick={() => setShowAddModal(true)}>
            Agregar Empleado
          </button>

          {showAddModal && (
            <div className="modal">
              <div className="modal-content">
                <h3>Agregar Nuevo Empleado</h3>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={newEmployee.firstName}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      firstName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={newEmployee.lastName}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, lastName: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newEmployee.email}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="DNI"
                  value={newEmployee.dni}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, dni: e.target.value })
                  }
                />
                <input
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  value={newEmployee.birthDate}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      birthDate: e.target.value,
                    })
                  }
                />
                <select
                  value={newEmployee.jobType}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, jobType: e.target.value })
                  }
                >
                  <option value="oficina">Oficina</option>
                  <option value="remoto">Remoto</option>
                  <option value="hibrido">Híbrido</option>
                </select>
                <select
                  value={newEmployee.position}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, position: e.target.value })
                  }
                >
                  <option value="Desarrollador de Software">
                    Desarrollador de Software
                  </option>
                  <option value="Diseñadora UX/UI">Diseñadora UX/UI</option>
                  <option value="Tester QA">Tester QA</option>
                  <option value="Management">Management</option>
                </select>
                <button onClick={addEmployee}>Agregar Empleado</button>
                <button onClick={() => setShowAddModal(false)}>Cerrar</button>
              </div>
            </div>
          )}

          {showEditModal && (
            <div className="modal">
              <div className="modal-content">
                <h3>Modificar Empleado</h3>
                <input
                  type="text"
                  placeholder="Nombre"
                  value={editEmployee.firstName}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      firstName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  value={editEmployee.lastName}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      lastName: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editEmployee.email}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="DNI"
                  value={editEmployee.dni}
                  onChange={(e) =>
                    setEditEmployee({ ...editEmployee, dni: e.target.value })
                  }
                />
                <input
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  value={editEmployee.birthDate}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      birthDate: e.target.value,
                    })
                  }
                />
                <select
                  value={editEmployee.jobType}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      jobType: e.target.value,
                    })
                  }
                >
                  <option value="oficina">Oficina</option>
                  <option value="remoto">Remoto</option>
                  <option value="hibrido">Híbrido</option>
                </select>
                <select
                  value={editEmployee.position}
                  onChange={(e) =>
                    setEditEmployee({
                      ...editEmployee,
                      position: e.target.value,
                    })
                  }
                >
                  <option value="Desarrollador de Software">
                    Desarrollador de Software
                  </option>
                  <option value="Diseñadora UX/UI">Diseñadora UX/UI</option>
                  <option value="Tester QA">Tester QA</option>
                  <option value="Management">Management</option>
                </select>
                <button onClick={saveEditEmployee}>Guardar Cambios</button>
                <button onClick={() => setShowEditModal(false)}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmployeePage;
