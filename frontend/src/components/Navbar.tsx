import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Blog App</h1>
        <div>
          <Link to="/dashboard" className="mr-4 hover:underline">Post Blog</Link>
          <Link to="/viewBlogs" className="hover:underline">View Blogs</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
