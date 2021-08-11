import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Markdown from 'markdown-to-jsx';
import { getBlog } from '../landing_blog/hooks';
import Tag from '../landing_blog/Tag';
import ShareOnSocials from './ShareOnSocials';
import { CircularProgress } from '@material-ui/core';
import { Fragment } from 'react';
import TableOfContent from './TableOfContent';

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
      {blog && blog !== undefined ? (
        <Fragment>
          <div className='posted-at'>
            <p>
              {blog.posted_at.toLocaleString(
                {},
                {
                  timeZone: 'UTC',
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                }
              )}
            </p>
          </div>
          <div className='container-blog-header'>
            <div className='container-blog-header-title'>
              <h1>{blog.title}</h1>

              <div className='container-blog-tags'>
                <div className='tags'>
                  {blog.tags.map((tag, idx) => (
                    <Tag key={idx} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
            <ShareOnSocials
              blogTitle={
                blog
                  ? blog.title
                  : 'No title found. Check your internet connection'
              }
            />
          </div>
          <div className='blog-image'>{blog ? parse(blog.blog_image) : ''}</div>
          <div className='container-blog-content'>
            <Markdown>{blog ? blog.content : ''}</Markdown>
            <TableOfContent content={blog.content} />
          </div>
        </Fragment>
      ) : blog === undefined ? (
        <div>
          <CircularProgress />
          <p>Loading blog...</p>
        </div>
      ) : (
        <h1>No blog found. Check your internet connection</h1>
      )}
    </div>
  );
};

export default Blog;
