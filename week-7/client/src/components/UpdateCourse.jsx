import axios from "axios";
import { useEffect, useState } from "react";
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
                console.log(response.data);
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
            await axios.put(`http://localhost:3000/admin/courses/${id}`, course, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`
                }
            })
            setSuccess('Course updated successfully');
        } catch (error) {
            console.log("Error occured while updating the course", error)
        }
    }

    const handleNavigate = () => {
        navigate("/admindashboard")
    }

    return (
        <div>
            <h2>Update Course</h2>
            {success &&
                <>
                    <p style={{ color: 'green' }}>{success}</p>
                    <button onClick={handleNavigate}>Click to Back to the Dashboard</button>
                </>
            }
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter title" value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} />
                <input type="text" placeholder="Enter description" value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <input type="number" placeholder="Enter price" value={course.price} onChange={(e) => setCourse({ ...course, price: e.target.value })} />
                <input type="text" placeholder="Enter imageLink" value={course.imageLink} onChange={(e) => setCourse({ ...course, imageLink: e.target.value })} />
                <label>
                    Pulished:
                    <input type="checkbox" checked={course.published} onChange={(e) => setCourse({ ...course, published: e.target.checked })} />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateCourse;