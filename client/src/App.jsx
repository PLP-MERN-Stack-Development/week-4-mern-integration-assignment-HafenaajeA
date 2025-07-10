import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PostList from './components/PostList';
import PostView from './components/PostView';
import PostForm from './components/PostForm';
import { BlogProvider } from './context/BlogContext';

export default function App() {
  return (
    <BlogProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}
