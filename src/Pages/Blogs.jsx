import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // or useNavigate if using React Router v6
import "./blogs.css";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // or useNavigate() for React Router v6

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://api.ikibehofoundation.org.rw/api/blogs/"
      );
      setBlogs(response.data.blogs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div>
      <div className="contacts_intro">
        <h3>Blogs</h3>
        <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Contacts" />
      </div>
      <div className="p-4">
        {blogs.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="p-4 rounded shadow-md cursor-pointer"
                onClick={() => handleBlogClick(blog._id)}
              >
                {blog.imageUrls && blog.imageUrls.length > 0 && (
                  <img
                    src={blog.imageUrls[0]}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded"
                  />
                )}
                <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
                <p className="text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
