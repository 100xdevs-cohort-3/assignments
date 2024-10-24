import axios from "axios";
import { useEffect } from "react"
import UserCourses from "./UserCourses";
import { Link } from "react-router-dom";
const Dashboard = () => {


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                await axios.get("http://localhost:3000/users/courses", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`
                    }
                })
            } catch (error) {
                console.log("Error in creating Post..", error)
            }
        }

        fetchCourses()
    }, [])



    return (
        <div className="mt-10">
            <div className="flex items-center justify-around">
                <h2 className="bg-blue-600 hover:scale-105 transition px-5 py-3 rounded-2xl text-white font-bold">Your Dashboard</h2>
                <Link to={"/purchasedcourses"}>
                    <button className="bg-blue-600 hover:scale-105 transition w-full px-5 py-3 rounded-2xl text-white font-bold">Purchased Courses</button>
                </Link>
            </div>
            <UserCourses />
        </div>
    );
};

export default Dashboard;