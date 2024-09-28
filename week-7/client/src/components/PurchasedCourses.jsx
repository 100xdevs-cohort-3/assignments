import axios from "axios";
import { useEffect, useState } from "react"

const PurchasedCourses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:3000/users/purchasedCourses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      setCourses(response.data.purchasedCourses)
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Purchased Courses</h1>
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

export default PurchasedCourses

