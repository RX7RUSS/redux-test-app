import React from 'react';

const ListOfUsers = ({ users }) => {
  return(
    <ul>
      {
        users.map((user, i) => <li key={i}>{user.name}</li> )
      }
    </ul>
  );
}

export default ListOfUsers;
