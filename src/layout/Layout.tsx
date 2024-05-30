import { NavLink, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/auth-context';

enum LinkVisibility {
  Public = 'Public',
  Authenticated = 'Authenticated',
  NotAuthenticated = 'NotAuthenticated',
}

const Layout = () => {
  const { connected } = useAuthContext();
  const commonLinks = [
    { name: 'Home', path: '/', visibility: LinkVisibility.Public },
    { name: 'Heroes', path: '/heroes', visibility: LinkVisibility.Public },
    { name: 'Search', path: '/search', visibility: LinkVisibility.Public },
    { name: 'Profile', path: '/profile', visibility: LinkVisibility.Authenticated },
    { name: 'Login', path: '/login', visibility: LinkVisibility.NotAuthenticated },
    { name: 'Register', path: '/register', visibility: LinkVisibility.NotAuthenticated },
  ];

  return (
    <>
      <nav>
        <ul className='flex justify-center gap-4'>
          {commonLinks
            .filter(
              (link) =>
                link.visibility === LinkVisibility.Public ||
                link.visibility === (connected ? LinkVisibility.Authenticated : LinkVisibility.NotAuthenticated),
            )
            .map((element, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={element.path}
                    className={({ isActive }) => (isActive ? 'text-red-600' : '')}
                  >
                    {element.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
