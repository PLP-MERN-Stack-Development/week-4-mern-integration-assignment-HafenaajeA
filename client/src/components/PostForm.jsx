import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

export default function PostForm() {
  const { id } = useParams();
  const { posts, categories, addPost, updatePost } = useBlog();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const post = posts.find(p => p._id === id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category?._id || post.category);
      }
    }
  }, [id, posts]);

  const validate = () => {
    if (!title.trim() || !content.trim() || !category) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (id) {
        await updatePost(id, { title, content, category });
      } else {
        await addPost({ title, content, category });
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'Error saving post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit' : 'Create'} Post</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
        disabled={loading}
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
        disabled={loading}
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
        disabled={loading}
      >
        <option value="">Select category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : id ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
