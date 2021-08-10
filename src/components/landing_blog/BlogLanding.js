import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Triangle from './Triangle';
import { getLatestBlogs } from './hooks';
import { CircularProgress } from '@material-ui/core';

const BlogLanding = () => {
  const [blogsArray, setBlogsArray] = useState(null);
  useEffect(() => {
    const fetchRepositoryInfo = async () => {
      const blogs = await getLatestBlogs();
      setBlogsArray(blogs);
    };
    fetchRepositoryInfo();
  }, []);

  return (
    <div className='container'>
      <Triangle />
      <h2>Latest blog posts</h2>
      <div className='container-blogs fade-in-up'>
        {blogsArray && blogsArray.length > 0 ? (
          blogsArray.map((blog, idx) => <BlogCard key={idx} blog={blog} />)
        ) : blogsArray === null ? (
          <CircularProgress />
        ) : (
          <p>No blogs available. Check your internet connection</p>
        )}
      </div>
      <button className='btn btn-blogs btn-3d-hover'>
        <p>Coming soon</p>
      </button>
    </div>
  );
};

export default BlogLanding;
