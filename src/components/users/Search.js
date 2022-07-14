import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

function Search ()  {

 const gitCon = useContext(githubContext);
 const alertCon = useContext(alertContext);

 const {searchUsers,clearUsers,users} = gitCon;
 const {showAlert} = alertCon;

 const [text, setText] = useState('');

 const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      showAlert('please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users..." onChange={onChange} value={text}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {users.length !==0 && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  
}


export default Search;
