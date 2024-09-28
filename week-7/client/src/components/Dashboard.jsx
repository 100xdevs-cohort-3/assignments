import  { useState } from 'react';
import axios from 'axios';
import Courses from "./Courses"

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [published, setPublished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3000/admin/courses',
        {
          title,
          description,
          price,
          imageLink,
          published
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}` 
          }
        }
      );

      setTitle('');
      setDescription('');
      setPrice('');
      setImageLink('');
      setPublished(false);
      // window.location.reload()
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Courses />
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Course Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image Link"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          required
        />
        <label>
          Published:
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
        </label>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
