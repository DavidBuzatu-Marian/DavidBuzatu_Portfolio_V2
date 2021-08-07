import React from 'react';
import BlogCard from './BlogCard';
import Triangle from './Triangle';

const mockBlogs = [
  {
    id: 1,
    title:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. ',
    date_created: '2021-08-07T18:55:53.000Z',
    blog_image: 'https://picsum.photos/1920/1080',
    tags: ['databases', 'aws'],
  },
  {
    id: 2,
    title: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    date_created: '2020-12-24T09:25:01.000Z',
    blog_image: 'https://picsum.photos/1920/1080',
    tags: ['databases', 'aws'],
  },
  {
    id: 3,
    title: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    date_created: '2020-11-12T19:33:45.000Z',
    blog_image: 'https://picsum.photos/1920/1080',
    tags: ['databases', 'aws'],
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    date_created: '2021-07-03T15:16:48.000Z',
    blog_image: 'https://picsum.photos/1920/1080',
    tags: ['databases', 'aws'],
  },
  {
    id: 5,
    title: 'Maecenas tristique, est et tempus semper, est quam pharetra magna.',
    date_created: '2020-10-29T06:30:27.000Z',
    blog_image: 'https://picsum.photos/1920/1080',
    tags: ['databases', 'aws'],
  },
  {
    id: 6,
    title: 'Pellentesque at nulla. Suspendisse potenti.',
    date_created: '2020-09-12T10:29:49.000Z',
    blog_image: 'https://picsum.photos/1920/1080',
    tags: ['databases', 'aws'],
  },
];

const BlogLanding = () => {
  return (
    <div className='container'>
      <Triangle />
      <h2>Latest blog posts</h2>
      {/* TODO 
        get blogs from database
      */}
      <div className='container-blogs'>
        {mockBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogLanding;
