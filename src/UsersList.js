import React, { useEffect, useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setUsers(data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}, []);


  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} <br />
            <strong>Name:</strong> {user.name} <br />
            <strong>Password:</strong> {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
