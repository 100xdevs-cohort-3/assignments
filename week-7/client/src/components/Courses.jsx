import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [message, setMessage] = useState("");

  // get token from localStorage
  const token = localStorage.getItem("token");

  // fetch all courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users/courses");
      setCourses(res.data.courses);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // fetch purchased courses
  const fetchPurchasedCourses = async () => {
    if (!token) return;
    try {
      const res = await axios.get("http://localhost:3000/users/purchasedCourses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPurchased(res.data.coursesData.map(c => c._id));
    } catch (err) {
      console.error("Error fetching purchased courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchPurchasedCourses();
  }, []);

  // purchase a course
  const purchaseCourse = async (courseId) => {
    if (!token) {
      setMessage("Please login to purchase courses");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:3000/users/courses/${courseId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
      setPurchased([...purchased, courseId]);
    } catch (err) {
      setMessage(err.response?.data?.message || "Purchase failed");
    }
  };

  return (
    <div>
      <h3>Available Courses</h3>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <div style={styles.courseContainer}>
        {courses.map(course => (
          <div key={course._id} style={styles.courseCard}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            {purchased.includes(course._id) ? (
              <button style={styles.purchasedButton} disabled>
                Purchased
              </button>
            ) : (
              <button
                onClick={() => purchaseCourse(course._id)}
                style={styles.purchaseButton}
              >
                Purchase
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  courseContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  courseCard: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
  },
  purchaseButton: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  purchasedButton: {
    background: "#aaa",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
  },
};

export default Courses;