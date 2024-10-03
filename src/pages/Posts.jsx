import { useEffect, useState } from 'react';
import LoggedHeader from './components/LoggedHeader';
import axios from 'axios';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchPosts();
  });
  return (
    <>
      <LoggedHeader />
      {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
      {/* Display error message if exists */}
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </>
  );
}
