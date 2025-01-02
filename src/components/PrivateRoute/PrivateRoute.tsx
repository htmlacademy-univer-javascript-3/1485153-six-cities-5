import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getRoute } from '../../utils/routes';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={getRoute('/login')} />;
};
