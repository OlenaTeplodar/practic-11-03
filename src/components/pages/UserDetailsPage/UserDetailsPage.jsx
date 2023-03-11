import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectUserById } from 'redux/user/userSelectors';
import { getUserById, deleteUserById } from 'redux/user/userOperations';
import { useParams, useNavigate } from 'react-router-dom';

export const UserDetailsPage = () => {
  const user = useSelector(selectUserById);
  const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);
    
    const handleDelete = () => {
        dispatch(deleteUserById(id));
        navigate('/users');
    };

    return (
      <>
        {user && (
          <div>
            <button type="button" onClick={() => navigate('/users')}>
              Go back
            </button>
            <h2>User Details</h2>
            <p>{user.name}</p>
            <img src={user.avatar} alt={user.name} />
            <p>{user.email}</p>
            <p>{user.phone}</p>
                    <p>{user.address}</p>
                    <button type="button" onClick={handleDelete}>Delete</button>
          </div>
        )}
      </>
    );
};
