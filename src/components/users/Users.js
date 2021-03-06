import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext'


function Users() {
  const context = useContext(githubContext)
  const users= context.users;
  const loading = context.loading;
  
  if (loading) return <Spinner />;
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: ' repeat(3, 1fr)',
  gap: '1rem',
};

export default Users;
