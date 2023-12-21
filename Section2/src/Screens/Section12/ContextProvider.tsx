import React, {useState, createContext} from 'react';
import {BlogType} from './types';

export const BlogContext = createContext<{
  blogs: BlogType[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogType[]>>;
  filterBlogById: ((id: string) => BlogType) | null;
  addBlog: (blog: BlogType) => void;
  editOneBlogInList: (blog: BlogType, blogId: string) => void;
}>({
  blogs: [],
  setBlogs: () => {},
  filterBlogById: null,
  addBlog: () => {},
  editOneBlogInList: () => {},
});

export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  const filterBlogById = (id: string) => {
    return blogs.filter(item => item.id === id)[0];
  };

  const addBlog = (blog: BlogType) => {
    setBlogs([...blogs, blog]);
  };

  const editOneBlogInList = (blog: BlogType, blogId: string) => {
    const editIndex = blogs.findIndex(blog => blog.id === blogId);
    blogs[editIndex] = blog;
    setBlogs([...blogs]);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: blogs,
        setBlogs: setBlogs,
        filterBlogById: (id: string) => filterBlogById(id),
        addBlog: (blog: BlogType) => addBlog(blog),
        editOneBlogInList: (blog: BlogType, blogId: string) =>
          editOneBlogInList(blog, blogId),
      }}>
      {children}
    </BlogContext.Provider>
  );
};
