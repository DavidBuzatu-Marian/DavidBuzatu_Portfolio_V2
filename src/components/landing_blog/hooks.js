import axios from 'axios';

export const getLatestBlogs = async () => {
  const blogsFromRepository = await getBlogs();
  let requests_for_blog = [];
  blogsFromRepository.data.forEach((blog) => {
    requests_for_blog.push(axios.get(blog.url));
  });
  const blogsPromises = await Promise.allSettled(requests_for_blog);
  let blogs = [];
  blogsPromises.forEach((blog) => {
    blogs.push(createBlogObject(blog.value));
  });
  blogs.sort((b1, b2) => {
    return b2.posted_at - b1.posted_at;
  });
  return blogs;
};

export const getBlog = async (sha) => {
  const blog = await axios.get(
    `https://api.github.com/repos/DavidBuzatu-Marian/Blogs/git/blobs/${sha}`
  );
  return createBlogObject(blog);
};

const createBlogObject = (blog) => {
  let content = atob(blog.data.content);
  const splittedContentOnEnter = content.split('\n');
  return {
    content: getContent(splittedContentOnEnter),
    posted_at: getPostedAtDate(splittedContentOnEnter),
    blog_image: getBlogImage(splittedContentOnEnter),
    title: getBlogTitle(splittedContentOnEnter),
    tags: getTags(splittedContentOnEnter),
    sha: blog.data.sha,
  };
};

const getBlogs = async () => {
  // const token = process.env.REACT_APP_GITHUB_API;
  // axios.defaults.headers.common['Authorization'] = 'token ' + token;
  return await axios.get(
    'https://api.github.com/repos/DavidBuzatu-Marian/Blogs/contents'
  );
};

const getTags = (splittedContentOnEnter) => {
  return JSON.parse(
    splittedContentOnEnter[4].slice(1, splittedContentOnEnter[4].length - 1)
  );
};

const getContent = (splittedContentOnEnter) => {
  const contentAfterTags = splittedContentOnEnter.slice(5);
  let content = '';
  contentAfterTags.forEach((line) => {
    content += line + '\n';
  });
  return content;
};

const getBlogTitle = (splittedContentOnEnter) => {
  return splittedContentOnEnter[3].substr(2); // have newline before for readability
};

const getBlogImage = (splittedContentOnEnter) => {
  return splittedContentOnEnter[1];
};

const getPostedAtDate = (splittedContentOnEnter) => {
  const splittedPostedAtLine = splittedContentOnEnter[0].split(' ');
  const dateIndex = splittedPostedAtLine.length - 1;
  const dateInitialLength = splittedPostedAtLine[dateIndex].length;
  const postedAtDate = splittedPostedAtLine[dateIndex].substr(
    0,
    dateInitialLength - 4
  );
  return new Date(postedAtDate);
};
