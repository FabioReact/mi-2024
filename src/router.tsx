import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./layout/Layout'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const PrivateRoute = lazy(() => import('./hoc/PrivateRoute'));
const Search = lazy(() => import('./pages/Search/Search'));
const Battle = lazy(() => import('./pages/Battle/Battle'));
const Home = lazy(() => import('./pages/Home/Home'));
const Heroes = lazy(() => import('./pages/Heroes/Heroes'));
const Optimisations = lazy(() => import('./pages/Optimisations/Optimisations'));

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
        path: 'battle',
        Component: Battle,
      },
      {
        path: 'optimisations',
        Component: Optimisations,
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
