import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks}) => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])
  return (
    <div className="lg:w-2/3">
     
      {
        blogs.map(blog => <Blog 
          key={blog.id}
          handleAddToBookmarks={handleAddToBookmarks}
           blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;