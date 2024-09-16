import React from "react";
import styles from "./EmployeeForm.module.css";

const EmployeeForm = ({ employee, handleSubmit, handleChange, isEditing }) => {
  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <h2>{isEditing ? "Editar Empleado" : "Agregar Empleado"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={employee.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={employee.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>DNI:</label>
            <input
              type="text"
              name="dni"
              value={employee.dni}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={employee.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Tipo de Trabajo:</label>
            <select
              name="tipoTrabajo"
              value={employee.tipoTrabajo}
              onChange={handleChange}
            >
              <option value="Oficina">Oficina</option>
              <option value="Remoto">Remoto</option>
            </select>
          </div>
          <div>
            <label>Posición:</label>
            <input
              type="text"
              name="posicion"
              value={employee.posicion}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{isEditing ? "Actualizar" : "Agregar"}</button>
        </form>
      </div>
    </section>
  );
};

export default EmployeeForm;
