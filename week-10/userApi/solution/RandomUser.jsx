import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomUser.css'; // Import the external CSS file

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`);
        setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching users", error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [page]);

  const loadMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="random-user-container">
      <h1>Random Users</h1>
      <div className="users-list">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-image"
            />
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      <button className="load-more-button" onClick={loadMoreUsers}>
        Load More Users
      </button>
    </div>
  );
};

export default RandomUser;
