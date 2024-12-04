import { useState, useEffect } from "react";

import UserCollection from "./components/UserCollection" 
import Pagination from "./components/Pagination";
function App() {
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading,setLoading] = useState(false);
  //range of one page : [(currentPage-1)*usersPerPage, currentPage*usersPerPage]
  async function getUser() {
    let response = await fetch("https://randomuser.me/api/");
    response = await response.json();

    console.log(response);
    return response;
  }

  async function addUsers() {
    setLoading(true);
    let newUsers=[]
    for(let i=1;i<=10;i++){
      let response = await getUser();
  
      let name = `${response.results[0].name.first} ${response.results[0].name.last}`;
      let image = response.results[0].picture.large;
      newUsers.push({userImage: image, userName:name})
    }

    setUsers((prev) => [
      ...prev,
      ...newUsers,
    ]);
    setLoading(false);
  }

  useEffect(() => {
    addUsers();
  }, []);

  function nextPage(){
    setCurrentPage(prev => prev+1);
  }
  function prevPage(){
    setCurrentPage(prev => prev-1);
  }
  const usersToShow =  users.slice(((currentPage-1)*usersPerPage), (currentPage*usersPerPage));
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Random Users</h1>
      <UserCollection usersToShow={usersToShow} loading={loading}/>
      {currentPage > 1 && <button onClick={prevPage}>Prev Page</button>}
      <button onClick={addUsers}>Add</button>
      {users.length > usersPerPage && <button onClick={nextPage}>NextPage</button>}

      <Pagination totalUsers={users.length} usersPerPage={usersPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
