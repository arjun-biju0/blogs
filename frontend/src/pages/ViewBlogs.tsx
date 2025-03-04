import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from API or local storage
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllBlogs')// Update with actual API endpoint
        const data = await response.data;
        setBlogs(data.blogs);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">All Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs available</p>
        ) : (
          <ul>
            {blogs.map((blog, index) => (
              <li key={index} className="p-4 mb-2 bg-gray-200 rounded">
                <h3 className="font-bold">{blog.title}</h3>
                <p>{blog.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViewBlogs;