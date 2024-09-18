export const validateOnlyLetters = (value) => {
  const regex = /^[a-zA-Z\s]+$/;
  if (!value.match(regex)) {
    return "Solo se permiten numeros.";
  }
  return "";
};

export const validateOnlyNumbers = (value) => {
  const regex = /^[0-9]+$/;
  if (!value.match(regex)) {
    return "Solo se permiten números.";
  }
  return "";
};

export const validateEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value.match(regex)) {
    return "Email no es válido.";
  }
  return "";
};

export const validateNotEmpty = (value) => {
  if (!value || value.trim() === "") {
    return "Este campo es obligatorio.";
  }
  return "";
};
