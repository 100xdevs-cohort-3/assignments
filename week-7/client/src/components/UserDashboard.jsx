import axios from "axios";
import { useEffect } from "react"
import UserCourses from "./UserCourses";
import { Link } from "react-router-dom";
const Dashboard = () => {


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users/courses", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
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
            <h2>Your Dashboard</h2>
            <Link to={"/purchasedcourses"}>
                <button>Purchased Courses</button>
            </Link>
            <UserCourses />
        </div>
    );
};

export default Dashboard;