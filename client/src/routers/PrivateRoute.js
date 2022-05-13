import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PrivateRoute() {
    const { isLogged } = useAuth();
    return isLogged() ? <Outlet /> : <Navigate to="/login" />;
}
