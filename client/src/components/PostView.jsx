import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
      <div>Category: {post.category?.name}</div>
      <Link to={`/edit/${post._id}`}>Edit</Link>
    </div>
  );
}
