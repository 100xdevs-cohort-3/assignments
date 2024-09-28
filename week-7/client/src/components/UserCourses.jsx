import axios from "axios";
import { useEffect, useState } from "react"

const UserCourses = () => {
  const [courses, setCourses] = useState([])

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

  return (
    <div>
      <h1>All Available Courses</h1>
      {
        courses.map((item, index) => (
            <div key={index} style={{ border: "2px solid black" } }>
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

export default UserCourses