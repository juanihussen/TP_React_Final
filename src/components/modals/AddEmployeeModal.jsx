import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import {
  validateOnlyLetters,
  validateOnlyNumbers,
  validateEmail,
  validateNotEmpty,
} from "../../helpers/validations";

const AddEmployeeModal = ({ show, onClose, onAdd }) => {
  const [formValues, handleChange, resetForm] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    dni: "",
    birthDate: "",
    jobType: "oficina",
    position: "Desarrollador de Software",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    newErrors.firstName =
      validateNotEmpty(formValues.firstName) ||
      validateOnlyLetters(formValues.firstName);
    newErrors.lastName =
      validateNotEmpty(formValues.lastName) ||
      validateOnlyLetters(formValues.lastName);
    newErrors.email =
      validateNotEmpty(formValues.email) || validateEmail(formValues.email);
    newErrors.dni = validateOnlyNumbers(formValues.dni);
    newErrors.position = validateOnlyLetters(formValues.position);

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onAdd(formValues);
      resetForm();
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Agregar Empleado</h2>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            DNI:
            <input
              type="text"
              name="dni"
              value={formValues.dni}
              onChange={handleChange}
            />
            {errors.dni && <span className="error">{errors.dni}</span>}
          </label>
          <label>
            Fecha de Nacimiento:
            <input
              type="date"
              name="birthDate"
              value={formValues.birthDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Tipo de Trabajo:
            <select
              name="jobType"
              value={formValues.jobType}
              onChange={handleChange}
            >
              <option value="oficina">Oficina</option>
              <option value="Remoto">Remoto</option>
            </select>
          </label>
          <label>
            Posición:
            <input
              type="text"
              name="position"
              value={formValues.position}
              onChange={handleChange}
            />
            {errors.position && (
              <span className="error">{errors.position}</span>
            )}
          </label>
          <button type="button" onClick={handleSubmit}>
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
