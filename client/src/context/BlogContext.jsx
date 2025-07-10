import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts and categories on mount
  useEffect(() => {
    setLoading(true);
    Promise.all([api.getPosts(), api.getCategories()])
      .then(([posts, categories]) => {
        setPosts(posts);
        setCategories(categories);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  // Optimistic update helpers
  const addPost = async (data) => {
    const tempId = Date.now().toString();
    const optimisticPost = { ...data, _id: tempId };
    setPosts(prev => [optimisticPost, ...prev]);
    try {
      const created = await api.createPost(data);
      setPosts(prev => prev.map(p => p._id === tempId ? created : p));
      return created;
    } catch (err) {
      setPosts(prev => prev.filter(p => p._id !== tempId));
      throw err;
    }
  };

  const updatePost = async (id, data) => {
    const prev = posts.find(p => p._id === id);
    setPosts(prevPosts => prevPosts.map(p => p._id === id ? { ...p, ...data } : p));
    try {
      const updated = await api.updatePost(id, data);
      setPosts(prevPosts => prevPosts.map(p => p._id === id ? updated : p));
      return updated;
    } catch (err) {
      setPosts(prevPosts => prevPosts.map(p => p._id === id ? prev : p));
      throw err;
    }
  };

  const deletePost = async (id) => {
    const prev = posts;
    setPosts(posts.filter(p => p._id !== id));
    try {
      await api.deletePost(id);
    } catch (err) {
      setPosts(prev);
      throw err;
    }
  };

  return (
    <BlogContext.Provider value={{
      posts, categories, loading, error,
      addPost, updatePost, deletePost
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
