import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// use axios here, similar to register and login
const Courses = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:3000/users/courses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      setCourses(response.data.courses);
      console.log(courses);
    };

    fetchCourses();
  }, []);
  const handleRoute = (id) => {
    navigate(`/updatecourse/${id}`)
  }
  return (
    <div>
      <h1>All Courses</h1>
      {
        courses.map((item, index) => (
            <div key={index} style={{ border: "2px solid black" }} onClick={() => handleRoute(item._id)}>
              <div>
                <img src={item.imageLink} height={100} width={100} alt="Image" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Rs.{item.price}</p>
              <p>{item.published ? 'Published' : 'Not Published'}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Courses