import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [editingCourseId, setEditingCourseId] = useState(null);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    if (!token) return;
    try {
      const res = await axios.get("http://localhost:3000/admin/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(res.data.courses);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createCourse = async () => {
    if (!token) return setMessage("Please login as admin");
    try {
      const res = await axios.post(
        "http://localhost:3000/admin/courses",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
      setForm({ title: "", description: "", imageUrl: "", price: "" });
      fetchCourses();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error creating course");
    }
  };

  const startEdit = (course) => {
    setEditingCourseId(course._id);
    setForm({
      title: course.title,
      description: course.description,
      imageUrl: course.imageUrl,
      price: course.price,
    });
  };

  const updateCourse = async () => {
    if (!token || !editingCourseId) return;
    try {
      const res = await axios.put(
        `http://localhost:3000/admin/courses/${editingCourseId}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
      setEditingCourseId(null);
      setForm({ title: "", description: "", imageUrl: "", price: "" });
      fetchCourses();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error updating course");
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Admin Dashboard</h3>
      {message && <p style={styles.message}>{message}</p>}

      <h4 style={styles.subHeading}>
        {editingCourseId ? "Edit Course" : "Create Course"}
      </h4>
      <div style={styles.form}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          style={styles.input}
        />
        {editingCourseId ? (
          <button onClick={updateCourse} style={styles.button}>
            Update Course
          </button>
        ) : (
          <button onClick={createCourse} style={styles.button}>
            Create Course
          </button>
        )}
      </div>

      <h4 style={styles.subHeading}>Your Courses</h4>
      <ul style={styles.courseList}>
        {courses.map((c) => (
          <li key={c._id} style={styles.courseItem}>
            <span>
              {c.title} - ${c.price}
            </span>
            <button onClick={() => startEdit(c)} style={styles.editButton}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  subHeading: {
    marginTop: "20px",
    color: "#555",
  },
  message: {
    color: "green",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  courseList: {
    listStyleType: "none",
    padding: 0,
  },
  courseItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #ddd",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AdminCourses;