const BASE_URL = "http://localhost:5000/employees";

export const fetchEmployees = () => {
  return fetch(BASE_URL)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching employees:", error));
};

export const addEmployee = (employee) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error adding employee:", error);
      throw error;
    });
};

export const deleteEmployee = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

export const updateEmployee = (employee) => {
  return fetch(`${BASE_URL}/${employee.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((response) => response.json());
};
