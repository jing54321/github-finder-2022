import React, { Fragment, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext'

const User = () => {
  const username = useParams().login;
  const context = useContext(githubContext);
  const {getUser, getUserRepos, loading, repos, user} = context
  
  useEffect(() => {
    getUser(username);
    getUserRepos(username);
    //eslint-disable-next-line
  },[])
  
  const {hireable, avatar_url, location, bio, html_url, company, blog, followers, following, public_repos,public_gists} = user;
  
  if(loading) return <Spinner/>;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable: {''}
      {hireable? <i className="fa fa-check text-success"/>:<i className="fa fa-times-circle text-danger"/>}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className='round-img' alt='' style={{width:'150px'}}/>
          <h1>{username}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (<div>
            <h3>Bio</h3>
            <p>{bio}</p>
          </div>)}
          <a href={html_url} className='btn btn-dark my-1'>Visit Github profile</a>
          <ul>
            <li>
              {username && <Fragment>
                <strong>Username: </strong> {username}
                </Fragment>}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company: </strong> {company}
                </Fragment>}
            </li>
            <li>
              {blog && <Fragment>
                <strong>Website: </strong> {blog}
                </Fragment>}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Followings: {following}</div>
        <div className='badge badge-danger'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos}/>
    </Fragment>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  repos:PropTypes.array.isRequired,
};

export default User;
