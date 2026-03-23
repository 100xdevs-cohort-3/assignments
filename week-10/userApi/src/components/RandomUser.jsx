import React ,{useState, useEffect}from 'react'
import axios from 'axios';

const RandomUser = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchUser = async () =>{
      setLoading(true);
      try{
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`);
        setUser((prevUser) => [...prevUser,...response.data.results]);
      }catch(error){
        console.log("Error fetching users", error);
      }
      setLoading(false);
    };  
  },[page]);

const loadMoreUser = () =>{
  setPage((prevPage) => prevPage + 1);
}

  return (
    <div>
      <h1>Random users</h1>
    </div>
  )
}

export default RandomUser