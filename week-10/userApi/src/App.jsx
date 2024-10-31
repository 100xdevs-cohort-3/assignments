import { useEffect, useState } from "react";
import RandomUser from "./components/RandomUser";
import axios from "axios";

function App() {
  let [usersData, setUsersData] = useState([]);
  let [hovered, setHovered] = useState(false);
  let [loader, setLoader] = useState(false);
  function handleClick() {
    let fetchData = async () => {
      let temp = [];
      setLoader(true);
      for (let i = 0; i < 5; i++) {
        let data = await axios.get("https://randomuser.me/api/");
        let name =
          data.data.results[0].name.title +
          " " +
          data.data.results[0].name.first +
          " " +
          data.data.results[0].name.last;
        let id = data.data.results[0].id.value;
        let url = data.data.results[0].picture.large;
        temp.push({ id, userName: name, url });
      }
      setLoader(false);
      setUsersData([...usersData, ...temp]);
    };
    fetchData();
  }
  useEffect(() => {
    let fetchData = async () => {
      setLoader(true);
      let temp = [];
      for (let i = 0; i < 5; i++) {
        let data = await axios.get("https://randomuser.me/api/");
        let name =
          data.data.results[0].name.title +
          " " +
          data.data.results[0].name.first +
          " " +
          data.data.results[0].name.last;
        let id = data.data.results[0].id.value;
        let url = data.data.results[0].picture.large;
        temp.push({ id, userName: name, url });
      }
      setLoader(false);
      setUsersData(temp);
    };
    fetchData();
  }, []);

  const displayUsersData = usersData.map((user, index) => {
    if (index % 5 === 0 && index !== 0) {
      return (
        <div key={index}>
          <RandomUser userName={user.userName} url={user.url} id={user.id} />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <RandomUser userName={user.userName} url={user.url} id={user.id} />
        </div>
      );
    }
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          padding: "12px",
        }}
      >
        {displayUsersData}
      </div>
      {loader && (
        <img
          src="/loader.gif"
          style={{
            // backgroundImage: `url()`, // Ensure the path is correct
            width: "100px", // Set appropriate width
            height: "100px", // Set appropriate height
            background: "blue",
          }}
        ></img>
      )}
      <div
        style={{
          background: hovered ? "#333" : "black",
          width: "90px",
          height: "40px",
          color: "white",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        Load More
      </div>
    </div>
  );
}

export default App;
