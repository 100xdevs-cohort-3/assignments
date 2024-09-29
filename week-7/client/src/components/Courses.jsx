import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// use axios here, similar to register and login
const Courses = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:3000/admin/courses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      setCourses(response.data.courses);
      // console.log(courses);
    };

    fetchCourses();
  }, []);
  const handleRoute = (id) => {
    navigate(`/updatecourse/${id}`)
  }
  return (
    <div className="px-10 lg:px-52 py-5">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {
          courses.map((item, index) => (
            <div
              key={index}
              className="card p-5 rounded-2xl hover:shadow-slate-900 hover:shadow-md transition-all shadow-md cursor-pointer"

            >
              <figure>
                <img
                  src={item.imageLink}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-2xl"
                />
              </figure>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold mt-2 text-2xl">{item.title}</h2>
                <p className="text-gray-500 h-12 line-clamp-2">{item.description}</p>
                <p className="font-semibold">Rs. {item.price}</p>
                <p className="font-semibold">{item.published ? 'Published' : 'Not Published'}</p>
                <div>
                  <button
                    onClick={() => handleRoute(item._id)}
                    className="bg-blue-600 hover:scale-105 transition w-full px-5 py-3 rounded-2xl"><span className="font-bold text-white">Update</span></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Courses