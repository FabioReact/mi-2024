import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AuthContextProvider } from './context/auth-context';
import { FavContextProvider } from './context/fav-context';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthContextProvider>
        <FavContextProvider>
          <RouterProvider router={router} />
        </FavContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
