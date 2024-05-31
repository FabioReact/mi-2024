import { useAuthContext } from '../../context/auth-context';
import { useFavContext } from '../../context/fav-context';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getFavorites } from '../../redux/reducers/heroesSlice';

const Profile = () => {
  const { email, token } = useAuthContext();
  // const { favorites } = useFavContext();
  // useAppDispatch()
  const favorites = useAppSelector(getFavorites)
  return (
    <section>
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <p>Token: {token}</p>
      <div>
        <h2>Heroes List</h2>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>
              {fav.id} - {fav.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
