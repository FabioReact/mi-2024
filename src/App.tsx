import Home from './pages/Home/Home'
import Heroes from './pages/Heroes/Heroes'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useState } from 'react'

function App() {
  const routes = [
    { name: 'Home', component: <Home /> },
    { name: 'Heroes', component: <Heroes /> },
    { name: 'Login', component: <Login /> },
    { name: 'Register', component: <Register /> },
  ]
  const [path, setPath] = useState('Home')
  return (
    <>
      <nav>
        <ul>
          {routes.map((item, index) => <li key={index} onClick={() => setPath(item.name)}>{item.name}</li> )}
          {/* <li>Home</li>
          <li>Heroes</li>
          <li>Login</li>
          <li>Register</li> */}
        </ul>
      </nav>
      {routes.find(item => item.name === path)?.component}
      {/* {path === "Home" && <Home />} */}
      {/* <Home />
      <Heroes />
      <Login />
      <Register /> */}
    </>
  )
}

export default App
