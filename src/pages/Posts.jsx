import '../cssModules/Posts.css';
import { useEffect, useState } from 'react';
import Create from '../components/Create';
import { Collapse } from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Avatar,
} from '@chakra-ui/react';
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
  }, [navigate]);
  return (
    <>
      <Header />
      <Create />
      {error && <span style={{ color: 'red' }}>{error}</span>}{' '}
      <div className="cardsContainer">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card
              key={post.id}
              bg={'#222222'}
              className="postCard"
              border={'solid 4px #9D44B5'}
            >
              <CardBody>
                <CardHeader display={'inline-flex'}>
                  <Avatar name={post.author.username} size={'sm'}></Avatar>
                  <Text>{post.author.username}</Text>
                </CardHeader>
                <CardHeader>
                  <Heading>{post.title}</Heading>
                </CardHeader>
                <Text>{post.content}</Text>
                <Collapse opacity={'0.4'}>Details </Collapse>
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
