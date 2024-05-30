import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Heroes from './pages/Heroes/Heroes';
import Layout from './layout/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './hoc/PrivateRoute';
import Search from './pages/Search/Search';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: 'heroes',
        Component: Heroes,
      },
      {
        path: 'search',
        Component: Search,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'profile',
            Component: Profile,
          },
        ],
      },
    ],
  },
]);

export default router;
