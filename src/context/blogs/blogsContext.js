import React, { createContext, useContext} from 'react';

const BlogsContext = createContext();

const useBlogsContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error('useBlogsContext must be used within an BlogsProvider');
  }
  return context;
};

export { useBlogsContext, BlogsContext };
