import './App.css'
import LoginPage from "./pages/LoginPage/Login.jsx";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import useAuth from "./hooks/useAuth.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ManagerPage from "./pages/ManagerPage/Manager.jsx";
import EmployeePage from "./pages/EmpoyeePage/Employee.jsx";
import Unauthorized from "./pages/UnauthorizedPage/Unauthorized.jsx";

export default function App() {
    const {loading} = useAuth();

    if (loading) {
        return <div>Loading...</div>;  // Отображаем лоадер
    }

    return (
        <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/login" replace/>}
            />
            <Route
                path="/login"
                element={<LoginPage/>}
            />
            <Route
                path="/employee"
                element={<PrivateRoute allowedRoles={['employee']}>
                    <EmployeePage/>
                </PrivateRoute>}
            />
            <Route
                path="/manager"
                element={<PrivateRoute allowedRoles={['manager']}>
                    <ManagerPage/>
                </PrivateRoute>}
            />
            <Route
                path="/unauthorized"
                element={<Unauthorized/>}
            />
        </Routes>
    </BrowserRouter>);
}