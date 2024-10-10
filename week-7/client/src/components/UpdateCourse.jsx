import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate()


    const [success, setSuccess] = useState('');
    const [course, setCourse] = useState({
        title: "",
        description: "",
        price: "",
        imageLink: "",
        published: false
    })

    useEffect(() => {
        const fetchOneCourse = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/admin/courses/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("adminToken")}`
                    }
                })
                // console.log(response.data.course._id);
                if (response.data.course) {
                    setCourse(response.data.course)
                }
            } catch (error) {
                console.log("Error occured while getting the course", error)
            }
        }
        fetchOneCourse()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/admin/courses/${id}`, course, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`
                }
            })
            setSuccess('Course updated successfully');
            toast.success(response.data.message)
        } catch (error) {
            console.log("Error occured while updating the course", error)
        }
    }

    const handleNavigate = () => {
        navigate("/admindashboard")
    }

    return (
        <main className="h-screen flex items-center justify-center">
        <div className="border border-black  rounded-3xl flex flex-col max-w-96 md:mx-auto mt-10 px-10 mx-10 text-center">
        <h2 className="font-bold text-2xl py-5">Update Course</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-10">
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="text" placeholder="Enter Title" value={course.title} onChange={(e) => setCourse({...course, title: e.target.value})} required />
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="text" placeholder="Enter description" value={course.description} onChange={(e) => setCourse({...course, description: e.target.value})} required />
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="number" placeholder="Enter Price" value={course.price} onChange={(e) => setCourse({...course, price: e.target.value})} required />
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="text" placeholder="Enter Image Link" value={course.imageLink} onChange={(e) => setCourse({...course, imageLink: e.target.value})} required />
          <label className="flex items-center gap-4">
            <span className="text-lg font-semibold">Published:</span>
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer"
              checked={course.published}
              onChange={(e) => setCourse({...course, published: e.target.value})}
            />
          </label>
          <button className="bg-blue-600 hover:scale-105 transition w-full px-5 py-3 rounded-2xl text-white font-bold" type="submit">Update</button>
          {success &&
                 <>
                     <button className="bg-blue-600 hover:scale-105 transition w-full px-5 py-3 rounded-2xl text-white font-bold" onClick={handleNavigate}>Return to the Dashboard</button>
                 </>
             }
        </form>
      </div>
      </main>
    );
};

export default UpdateCourse;