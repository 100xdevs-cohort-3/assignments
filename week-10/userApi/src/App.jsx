  import { useState, useEffect } from "react";
  import RandomUser from "./components/RandomUser";

  function App() {
    const [users, setUsers] = useState([]);

    async function getUser(){
      let response = await fetch("https://randomuser.me/api/");
      response = await response.json();

      console.log(response);
      return response;
    }


    async function addUser() {
      let response = await getUser();

      let name = `${response.results[0].name.first} ${response.results[0].name.last}`
      let image = response.results[0].picture.large;
      
      setUsers((prev) => [
        ...prev,
        {
          userImage: image,
          userName: name,
        },
      ]);
    }

    useEffect(() => {
      addUser();
    }, []);

    return (
      <div style={{textAlign:"center"}}>
        <h1>Random Users</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "Center",
            border: "5px solid black",
            flexWrap: "wrap",
          }}
        >
          {users.map((user, index) => {
            return (
              <RandomUser key={index} userImage={user.userImage} userName={user.userName} />
            );
          })}
        </div>
        <button onClick={addUser}>Add</button>
      </div>
    );
  }

  export default App;
