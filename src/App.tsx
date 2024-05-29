// import Home from './pages/Home/Home'
// import Heroes from './pages/Heroes/Heroes'
// import Login from './pages/Login/Login'
// import Register from './pages/Register/Register'
import { RouterProvider } from 'react-router-dom'
import router from './router'

// High Order Function


function App() {

  return (
    <>
     <RouterProvider router={router} />

    </>
  )
}

export default App
