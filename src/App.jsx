import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import EmployeePage from "./pages/EmpleadosPage/Employee";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"; // Asegúrate de importar NotFoundPage si la necesitas

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <PrivateRoute>
            <EmployeePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />{" "}
    </Routes>
  );
}

export default App;
