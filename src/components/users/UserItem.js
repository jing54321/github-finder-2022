import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Useritem({ user }) {
  //{user:{login,avatar_url,html_url}}
  return (
    <div className="card text-center">
      <img src={user.avatar_url} alt="" className="round-img" style={{ width: '60px' }}></img>
      <h3>{user.login}</h3>
      <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
}
Useritem.prototype = {
  user: PropTypes.object.isRequired,
};
export default Useritem;
