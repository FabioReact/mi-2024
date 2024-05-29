// rafce

import { NavLink } from 'react-router-dom';

const Layout = () => {
  const navElement = [
    { name: 'Home', path: '/' },
    { name: 'Heroes', path: '' },
    { name: 'Login', path: '' },
    { name: 'Register', path: '' },
  ];
  return (
    <>
      <nav>
        <ul>
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
    </>
  );
};

export default Layout;
