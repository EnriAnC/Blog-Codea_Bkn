function blogsReducer(blogs, action) {

  const nextId = Object.keys(blogs).length > 0 ? Math.max(...Object.keys(blogs).map(Number)) + 1 : 0;

  switch (action.type) {
    case 'load': {
      return {
        ...blogs,
        ...action.payload
      };
    }
    case 'added': {
      const result = { 
        ...blogs, 
        [nextId]: {...action.payload, id: nextId}  
      }
      console.log(result)
      localStorage.setItem('blogs', JSON.stringify(result))
      return result;
    }
    case 'changed': {
      return { ...blogs, [nextId]: {...action.payload, id: nextId}  };
    }
    case 'deleted': {
      const { [action.id]: deletedBlog, ...remainingBlogs } = blogs;
      localStorage.setItem('blogs', JSON.stringify(remainingBlogs));
      return remainingBlogs;
    }
    default: {
      return blogs;
    }
  }
}

export default blogsReducer