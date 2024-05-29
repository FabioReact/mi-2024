import { useAuthContext } from "../../context/auth-context"

const Profile = () => {
  const { email, token } = useAuthContext()
  return (
    <section>
        <h1>Profile</h1>
        <p>Email: {email}</p>
        <p>Token: {token}</p>
    </section>
  )
}

export default Profile