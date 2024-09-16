import { useState, useEffect } from "react";
import {
  fetchEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../services/employeeService";

const useEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => setError(error));
  }, []);

  const handleAddEmployee = (employee) => {
    addEmployee(employee)
      .then((newEmployee) => {
        console.log(newEmployee);
        setEmployees([...employees, newEmployee]);
        setIsModalOpen(false);
      })
      .catch((error) => setError(error));
  };

  const handleDeleteEmployee = (id) => {
    deleteEmployee(id)
      .then(() => setEmployees(employees.filter((emp) => emp.id !== id)))
      .catch((error) => setError(error));
  };

  const handleUpdateEmployee = (employee) => {
    updateEmployee(employee)
      .then((updatedEmployee) => {
        setEmployees(
          employees.map((emp) =>
            emp.id === updatedEmployee.id ? updatedEmployee : emp
          )
        );
        setIsModalOpen(false);
      })
      .catch((error) => setError(error));
  };

  return {
    employees,
    error,
    isModalOpen,
    setIsModalOpen,
    handleAddEmployee,
    handleDeleteEmployee,
    handleUpdateEmployee,
  };
};

export default useEmployee;
