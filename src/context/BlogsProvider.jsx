import React, { useEffect, useReducer } from 'react';
import blogsReducer from './blogsReducer';
import { BlogsContext } from './blogsContext.js';

const BlogsProvider = ({ children }) => {
    const [blogs, dispatch] = useReducer(blogsReducer, {}, () => {
      const blogsLS = JSON.parse(localStorage.getItem('blogs'));
      return blogsLS || {};
    });
  
    useEffect(() => {

      const blogsLS = JSON.parse(localStorage.getItem('blogs'));

      if (Boolean(blogsLS)) return
      
      async function fetchData(){
        const response = await fetch('/blogs.json');
        const data = await response.json();
        const blogssById = {};
      
        for (const articulo of data) {
            blogssById[articulo.id] = articulo;
        }
        localStorage.setItem('blogs', JSON.stringify(blogssById));
      }
      fetchData()
      
      
    }, []);
  
    return (
      <BlogsContext.Provider value={{ blogs, dispatch }}>
        {children}
      </BlogsContext.Provider>
    );
};

export default BlogsProvider