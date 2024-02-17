import Header from "./components/Header"
import BlogRoutes from "./routes/BlogRoutes"
import { ContextProvider } from "./context/BlogContext"
import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlog] = useState([]);

  const addBlog = (blog) => {
    setBlog((prevBlog) => [ {...blog}, ...prevBlog]);
  };

  const deleteBlog = (id) => {
    setBlog((prevBlog) => prevBlog.filter((blog) => blog.id !== id))
  }

  const editBlog = (id, editedBlog) => {
    setBlog((prevBlog) => prevBlog.map((blog) => blog.id === id ? editedBlog : blog))
  }
  
  useEffect(() => {
    const blog = JSON.parse(localStorage.getItem("blogs"))
    if(blog){
      setBlog(blog)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs))
  }, [blogs])



  return (
    <ContextProvider value={{blogs, addBlog, deleteBlog, editBlog}}>
      <Header/>
      <div className="container">
        <div className="row">
          <BlogRoutes/>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
