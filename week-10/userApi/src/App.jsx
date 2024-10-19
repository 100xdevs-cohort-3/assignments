import RandomUser from "./components/RandomUser";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=5`
      );
      setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  function loadMoreUsers() {
    setPage((page) => page + 1);
  }

  return (
    <>
      <h1>Random Users</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((user, index) => (
          <RandomUser user={user} key={index} />
        ))}
      </div>
      {loading ? (
        <h2>...Loading</h2>
      ) : (
        <button className="btn" onClick={loadMoreUsers}>
          Load more users
        </button>
      )}
    </>
  );
}

export default App;
