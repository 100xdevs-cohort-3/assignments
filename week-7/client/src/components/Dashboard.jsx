import axios from "axios";
import { useState } from "react";
import Courses from "./Courses"
import toast from "react-hot-toast";
const Dashboard = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [published, setPublished] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/admin/courses", {
        title,
        description,
        price,
        imageLink,
        published
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`
        }
      })
      console.log(response.data);
      toast.success(response.data.message)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error in creating Post..", error)
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "An error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }


  return (
    <main>
      <div className="border border-black rounded-3xl flex flex-col max-w-96 md:mx-auto mt-10 px-10 mx-10 text-center">
        <h2 className="font-bold text-2xl py-5">Create New Course</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-10">
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <input
            className="border-2 outline-none font-semibold border-black px-5 py-2 rounded-xl"
            type="text" placeholder="Enter Image Link" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
          <label className="flex items-center gap-4">
            <span className="text-lg font-semibold">Published:</span>
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
          </label>
          <button className="bg-blue-600 hover:scale-105 transition w-full px-5 py-3 rounded-2xl text-white font-bold" type="submit">Submit</button>
        </form>
      </div>
      <Courses />
    </main>
  );
};

export default Dashboard;