import React, { useEffect, useState } from "react";
import './styles.css'
const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=9"); // Fetch 9 users
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.log("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // Initial fetch on mount
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Random Users</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <img src={user.picture.large} alt="User" />
              <p>{user.name.first} {user.name.last}</p>
            </div>
          ))}
        </div>
      )}
      <button className="load-btn" onClick={fetchUsers}>Load More Users</button>
    </div>
  );
};

export default RandomUser;
