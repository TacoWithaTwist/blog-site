import { useEffect, useState } from 'react';
import Create from '../components/Create';
import { Card, CardHeader, CardBody, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
        navigate('/login');
      }
    };
    fetchPosts();
  });
  return (
    <>
      <Header />
      <Create />
      {error && <span style={{ color: 'red' }}>{error}</span>}{' '}
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} bg={'#011627'}>
              <CardBody>
                <CardHeader>{post.title}</CardHeader>
                <Text>{post.content}</Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </>
  );
}
