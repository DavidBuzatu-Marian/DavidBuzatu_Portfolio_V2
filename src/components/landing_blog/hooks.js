import axios from 'axios';

export const getLatestBlogs = async () => {
  const token = process.env.REACT_APP_GITHUB_API;
  axios.defaults.headers.common['Authorization'] = 'token ' + token;
  const addBlogs = await axios.get(
    'https://api.github.com/repos/DavidBuzatu-Marian/Blogs/contents'
  );
  let requests_for_blog = [];
  addBlogs.data.forEach((blog) => {
    requests_for_blog.push(axios.get(blog.url));
  });
  const blogsPromises = await Promise.allSettled(requests_for_blog);
  let blogs = [];
  blogsPromises.forEach((blog) => {
    let content = atob(blog.value.data.content);
    const splittedContentOnEnter = content.split('\n');
    blogs.push({
      content,
      posted_at: getPostedAtDate(splittedContentOnEnter),
      blog_image: getBlogImage(splittedContentOnEnter),
      title: getBlogTitle(splittedContentOnEnter),
    });
  });
  return blogs;
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
