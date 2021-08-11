import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Markdown from 'markdown-to-jsx';
import { getBlog } from '../landing_blog/hooks';
import Tag from '../landing_blog/Tag';
import ShareOnSocials from './ShareOnSocials';
import { CircularProgress } from '@material-ui/core';
const Blog = ({ blogProp, match }) => {
  const [blog, setBlog] = useState(blogProp);

  useEffect(() => {
    const getBlogAndSetState = async (id) => {
      try {
        const blog = await getBlog(id);
        setBlog(blog);
      } catch (err) {
        setBlog(undefined);
      }
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
        <p>
          {' '}
          {blog && blog !== undefined ? (
            blog.posted_at.toLocaleString(
              {},
              {
                timeZone: 'UTC',
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              }
            )
          ) : !blog && blog !== undefined ? (
            <CircularProgress />
          ) : (
            'No date found. Check your internet connection'
          )}
        </p>
      </div>
      <div className='container-blog-header'>
        <div className='container-blog-header-title'>
          <h1>
            {blog && blog !== undefined ? (
              blog.title
            ) : !blog && blog !== undefined ? (
              <CircularProgress />
            ) : (
              'No title found. Check your internet connection'
            )}
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
