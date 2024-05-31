import { RouterProvider } from 'react-router-dom';
import router from './router';
import { AuthContextProvider } from './context/auth-context';
import { FavContextProvider } from './context/fav-context';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ReduxProvider store={store}>
        <AuthContextProvider>
          <FavContextProvider>
            <RouterProvider router={router} />
          </FavContextProvider>
        </AuthContextProvider>
      </ReduxProvider>
    </Suspense>
  );
}

export default App;
