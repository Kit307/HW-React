import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DepartmentPage from "./DepartmentPage";
import EmployeePage from "./EmployeePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Profile from "./ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route configuration */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/employeepage" element={<EmployeePage />} />
        <Route path="/departmentpage" element={<DepartmentPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
