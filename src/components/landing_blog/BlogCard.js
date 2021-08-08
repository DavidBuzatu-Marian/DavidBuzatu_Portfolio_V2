import React from 'react';
import Tag from './Tag';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog: { title, date_created, blog_image, tags } }) => {
  return (
    <Link to='#'>
      <div className='blog-card'>
        <div className='header'>
          <img src={blog_image} alt='Contains info about blog' />
        </div>
        <div className='body'>
          <div className='blog-title'>
            <p>{title}</p>
          </div>
          <div className='date'>
            <button className='btn btn-date'>
              <span className='material-icons-outlined'>date_range</span>
            </button>
            <p>
              {new Date(date_created).toLocaleDateString(
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
