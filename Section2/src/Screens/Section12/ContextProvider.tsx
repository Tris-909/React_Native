import React, {useState, useEffect, createContext} from 'react';
import {BlogType} from './types';
import axios from 'axios';

export const BlogContext = createContext<{
  blogs: BlogType[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogType[]>>;
  filterBlogById: ((id: string) => BlogType) | null;
  addBlog: (blog: BlogType) => void;
  editOneBlogInList: (blog: BlogType, blogId: string) => void;
  loadExistingBlogs: () => void;
  deleteOneBlog: (id: string) => void;
}>({
  blogs: [],
  setBlogs: () => {},
  filterBlogById: null,
  addBlog: () => {},
  editOneBlogInList: () => {},
  loadExistingBlogs: () => {},
  deleteOneBlog: () => {},
});

export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const endpoint = 'https://2215-116-109-58-35.ngrok-free.app/blogs';

  const filterBlogById = (id: string) => {
    return blogs.filter(item => item.id === id)[0];
  };

  const addBlog = async (blog: BlogType) => {
    try {
      setBlogs([...blogs, blog]);
      await axios.post(endpoint, blog);
    } catch (error) {
      console.log(error);
    }
  };

  const loadExistingBlogs = async () => {
    try {
      const {data} = await axios.get(endpoint);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editOneBlogInList = (blog: BlogType, blogId: string) => {
    try {
      const editIndex = blogs.findIndex(blog => blog.id === blogId);
      blogs[editIndex] = blog;
      setBlogs([...blogs]);

      axios.patch(`${endpoint}/${blogId}`, blog);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOneBlog = (id: string) => {
    try {
      const newBlogs = blogs.filter(item => item.id !== id);
      setBlogs(newBlogs);

      axios.delete(`${endpoint}/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: blogs,
        setBlogs: setBlogs,
        filterBlogById: (id: string) => filterBlogById(id),
        addBlog: (blog: BlogType) => addBlog(blog),
        editOneBlogInList: (blog: BlogType, blogId: any) =>
          editOneBlogInList(blog, blogId),
        loadExistingBlogs: () => loadExistingBlogs(),
        deleteOneBlog: (id: string) => deleteOneBlog(id),
      }}>
      {children}
    </BlogContext.Provider>
  );
};
