import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Markdown from 'markdown-to-jsx';
import { getBlog } from '../landing_blog/hooks';
import Tag from '../landing_blog/Tag';
import ShareOnSocials from './ShareOnSocials';
const Blog = ({ blogProp, match }) => {
  const [blog, setBlog] = useState(blogProp);

  useEffect(() => {
    const getBlogAndSetState = async (id) => {
      const blog = await getBlog(id);
      setBlog(blog);
    };

    if (blog === undefined) {
      getBlogAndSetState(match.params.id);
    } else {
      setBlog(blogProp);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container-blog'>
      <div className='posted-at'>
        <p>Posted on 16 August 2021</p>
      </div>
      <div className='container-blog-header'>
        <div className='container-blog-header-title'>
          <h1>
            {blog
              ? blog.title
              : 'No title found. Check your internet connection'}
          </h1>
          <div className='container-blog-tags'>
            <div className='tags'>
              {blog
                ? blog.tags.map((tag, idx) => <Tag key={idx} tag={tag} />)
                : 'No blog tags found. Check your internet connection'}
            </div>
          </div>
        </div>
        <ShareOnSocials
          blogTitle={
            blog ? blog.title : 'No title found. Check your internet connection'
          }
        />
      </div>
      <div className='blog-image'>{blog ? parse(blog.blog_image) : ''}</div>
      <div className='container-blog-content'>
        <Markdown>{blog ? blog.content : ''}</Markdown>
      </div>
    </div>
  );
};

export default Blog;
