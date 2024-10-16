import '../cssModules/Posts.css';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import colors from '../components/ColorPallette';
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Avatar,
  Image,
} from '@chakra-ui/react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const bg = colors.bg;
  const images = [
    'https://images.unsplash.com/photo-1728567409684-e42ba81a3c34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1707146618205-a865ca443906?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
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
      {error && <span style={{ color: 'red' }}>{error}</span>}{' '}
      <Box bg={bg} className="cardsContainer">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card key={post.id} className="postCard">
              <CardBody>
                <CardHeader display={'inline-flex'}>
                  <Image scale={5} src={images[index]}></Image>
                </CardHeader>
                <Box>
                  <Avatar name={post.author.username} size={'sm'}></Avatar>
                  <Text>{post.author.username}</Text>
                </Box>

                <CardHeader>
                  <Heading>{post.title}</Heading>
                </CardHeader>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </Box>
    </>
  );
}
