// import axios from "axios";
// import { useState } from "react";
// import Courses from "./Courses"
// const UserDashboard = () => {
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [price, setPrice] = useState("")
//   const [imageLink, setImageLink] = useState("")
//   const [published, setPublished] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/admin/courses", {
//         title, 
//         description, 
//         price, 
//         imageLink, 
//         published
//       }, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("adminToken")}`
//         }
//       })
//       window.location.reload();
//     } catch (error) {
//       console.log("Error in creating Post..", error)
//     }
//   }


//   return (
//     <div>
//       <Courses />
//       <h2>Create New Course</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
//         <input type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         <input type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}required />
//         <input type="text" placeholder="Enter Image Link" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required/>
//         <label>
//           Published: <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserDashboard;


import axios from "axios";
import { useEffect } from "react"
import Courses from "./Courses"
const Dashboard = () => {


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/courses", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`
          }
        })
        console.log("The responses are:", response.data);
      } catch (error) {
        console.log("Error in creating Post..", error)
      }
    }

    fetchCourses()
  }, [])



  return (
    <div>
      <h2>All Available Courses</h2>
      {/* <Courses /> */}
    </div>
  );
};

export default Dashboard;