import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

export default function PostList() {
  const { posts, loading, error, deletePost } = useBlog();

  const handleDelete = async (id) => {
    if (window.confirm('Delete this post?')) {
      try {
        await deletePost(id);
      } catch (err) {
        alert(err.message || 'Failed to delete');
      }
    }
  };

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div style={{ color: 'red' }}>{error.message || error}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
            {' '}
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
