import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/user/userSelectors';
import { Link } from 'react-router-dom';

export const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
