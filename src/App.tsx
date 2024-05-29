// import Home from './pages/Home/Home'
// import Heroes from './pages/Heroes/Heroes'
// import Login from './pages/Login/Login'
// import Register from './pages/Register/Register'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AuthContextProvider } from './context/auth-context';

// High Order Function

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
