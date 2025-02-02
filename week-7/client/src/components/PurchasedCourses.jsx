import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const PurchasedCourses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:3000/users/purchasedCourses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      setCourses(response.data.purchasedCourses)
    };

    fetchCourses();
  }, []);

  return (
    <div className="px-10 lg:px-52 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">Your Purchased Courses</h1>
        <Link to={"/userdashboard"}>
          <button className="bg-blue-600 hover:scale-105 transition px-5 py-3 rounded-2xl text-white font-bold">Back to Dashboard</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {
          courses.map((item, index) => (
            <div key={index} className="card p-5 rounded-2xl hover:shadow-slate-900 hover:shadow-md transition-all shadow-md cursor-pointer">
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
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PurchasedCourses

