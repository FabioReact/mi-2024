import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AuthContextProvider } from './context/auth-context';
import { FavContextProvider } from './context/fav-context';

function App() {
  return (
    <>
      <AuthContextProvider>
        <FavContextProvider>
          <RouterProvider router={router} />
        </FavContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
