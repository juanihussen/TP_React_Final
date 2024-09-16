import React from "react";
import useForm from "../../hooks/useForm";

const EditEmployeeModal = ({ show, onClose, employee, onSave }) => {
  const [formValues, handleChange, resetForm] = useForm(employee);

  const handleSubmit = () => {
    onSave(formValues);
    resetForm();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Editar Empleado</h2>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          <label>
            DNI:
            <input
              type="text"
              name="dni"
              value={formValues.dni}
              onChange={handleChange}
            />
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
              <option value="campo">Campo</option>
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
          </label>
          <button type="button" onClick={handleSubmit}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
