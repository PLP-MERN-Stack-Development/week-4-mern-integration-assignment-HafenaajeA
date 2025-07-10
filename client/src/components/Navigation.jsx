import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Posts</Link> |{' '}
      <Link to="/create">Create Post</Link>
    </nav>
  );
}
