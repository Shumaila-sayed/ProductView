import { Outlet, Navigate } from "react-router-dom";
import type { ProtectedRoutesProps } from "../types";

const ProtectedRoutes = ({user}: ProtectedRoutesProps) => {
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;