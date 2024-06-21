import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // For React Router v6
import axios from "axios";
import "./blogs.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate(); // For React Router v6

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://api.ikibehofoundation.org.rw/api/blogs/${id}`
      );
      setBlog(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      {blog.imageUrls && blog.imageUrls.length > 0 && (
        <img
          src={blog.imageUrls[0]}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <p className="text-gray-500 mb-2">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
};

export default SingleBlog;
