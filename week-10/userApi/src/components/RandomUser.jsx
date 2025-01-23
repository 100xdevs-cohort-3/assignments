import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(`https://randomuser.me/api?page=${page}&results=5`)
        .then((data) => {
          setUsers((prevUsers) => [...prevUsers, ...data.data.results]);
          setIsLoading(false);
        });
    } catch (e) {
      alert("Error while fetching");
    }
  }, [page]);

  function loadUsers() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div style={{ margin: "0 50px", textAlign: "center" }}>
      <h1>Random Users</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {users.map((user, index) => (
          <Card key={index} isLoading={isLoading}>
            <img src={user.picture.thumbnail} style={{ borderRadius: 100 }} />
            <p>
              {user.name.first}
              {user.name.last}
            </p>
          </Card>
        ))}
      </div>
      <button
        style={{
          padding: 10,
          marginTop: 10,
          fontSize: 15,
          backgroundColor: "skyblue",
          color: "white",
          border: "1px solid white",
          borderRadius: 5,
        }}
        onClick={loadUsers}
      >
        Load more
      </button>
    </div>
  );
};

export default RandomUser;
