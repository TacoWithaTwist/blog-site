import { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get('http://localhost:3000/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        });
        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchPosts();
  });
  return (
    <>
      <Header />
      <Create />
      {error && <span style={{ color: 'red' }}>{error}</span>}{' '}
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
