import React from 'react';
import { Outlet } from 'react-router-dom';

interface ProtectedRouterProps {
  allowRoles: string[];
}

export default function PrivateRoute({ allowRoles }: ProtectedRouterProps) {
  return <Outlet />
}
