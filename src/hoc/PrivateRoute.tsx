import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth-context';

const PrivateRoute = () => {
  const { connected } = useAuthContext();
  const navigate = useNavigate();
  if (!connected) navigate('/login');
  return <Outlet />;
};

export default PrivateRoute;
