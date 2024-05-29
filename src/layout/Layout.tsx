import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const navElement = [
    { name: 'Home', path: '/' },
    { name: 'Heroes', path: '/heroes' },
    { name: 'Profile', path: '/profile' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-4'>
          {navElement.map((element, index) => (
            <li key={index}>
              <NavLink
                to={element.path}
                className={({ isActive }) => (isActive ? 'text-red-600' : '')}
              >
                {element.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
