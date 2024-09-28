import axios from "axios";
import { useEffect, useState } from "react"

const UserCourses = () => {
  const [courses, setCourses] = useState([])
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:3000/users/courses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      setCourses(response.data.courses);
      console.log(courses);
    };

    fetchCourses();
  }, []);

  const handlePurchase = async (id) => {
    try {
        await axios.post(`http://localhost:3000/users/courses/${id}`, {}, {  
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        });
        setSuccess("Course purchased Successfully");
    } catch (error) {
        console.log("Error while purchasing the course", error);
    }
};


  return (
    <div>
      <h1>All Available Courses</h1>
      {success &&
                <>
                    <p style={{ color: 'green' }}>{success}</p>
                </>
            }
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
              <button onClick={() => handlePurchase(item._id)}>Purchase</button>
            </div>
        ))
      }
    </div>
  )
}

export default UserCourses