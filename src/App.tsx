import Home from './pages/Home/Home'
import Heroes from './pages/Heroes/Heroes'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Heroes</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
      <Home />
      <Heroes />
      <Login />
      <Register />
    </>
  )
}

export default App
