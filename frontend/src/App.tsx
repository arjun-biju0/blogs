import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import BlogDashboard from "./pages/BlogDashboard";
import ViewBlogs from "./pages/ViewBlogs";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<BlogDashboard />} />
        <Route path="/viewBlogs" element={<ViewBlogs />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
