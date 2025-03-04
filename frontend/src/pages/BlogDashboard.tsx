import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function BlogDashboard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editingIndex] = { title, content };
      setPosts(updatedPosts);
      setEditingIndex(null);
    } else {
      setPosts([...posts, { title, content }]);
    }
    axios.post('http://localhost:3000/addBlog',{title,content})
    setTitle("");
    setContent("");
  };

  const handleEdit = (index) => {
    setTitle(posts[index].title);
    setContent(posts[index].content);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <Navbar/>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Blog Dashboard</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
            required
          ></textarea>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {editingIndex !== null ? "Update Post" : "Create Post"}
          </button>
        </form>
        <ul>
          {posts.map((post, index) => (
            <li key={index} className="p-4 mb-2 bg-gray-200 rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <div className="mt-2">
                <button onClick={() => handleEdit(index)} className="mr-2 text-blue-500">Edit</button>
                <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogDashboard;
