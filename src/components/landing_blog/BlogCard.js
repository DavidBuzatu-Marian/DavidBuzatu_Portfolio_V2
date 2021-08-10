import React from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const BlogCard = ({ blog: { title, posted_at, blog_image, tags } }) => {
  return (
    <Link to='#'>
      <div className='blog-card'>
        <div className='header'>{parse(blog_image)}</div>
        <div className='body'>
          <div className='blog-title'>
            <p>{title}</p>
          </div>
          <div className='date'>
            <button className='btn btn-date'>
              <span className='material-icons-outlined'>date_range</span>
            </button>
            <p>
              {new Date(posted_at).toLocaleDateString(
                {},
                {
                  timeZone: 'UTC',
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }
              )}
            </p>
          </div>
          <div className='tags'>
            {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
