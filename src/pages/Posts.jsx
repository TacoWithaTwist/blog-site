import '../cssModules/Posts.css';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import colors from '../ulils/ColorPallette';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Avatar,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 3;

  const handleNextPage = () => {
    if (page < Math.ceil(totalPosts / postsPerPage)) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const bg = colors.bg;
  const images = [
    'https://images.unsplash.com/photo-1728567409684-e42ba81a3c34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1707146618205-a865ca443906?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more images if needed
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get('http://localhost:3000/api/posts', {
          params: { page, limit: postsPerPage },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data.posts);
        setTotalPosts(response.data.totalPosts);
      } catch (error) {
        setError(error);
        navigate('/login');
      }
    };
    fetchPosts();
  }, [navigate, page]);

  return (
    <>
      <Header />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <Box bg={bg} className="cardsContainer">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card key={post.id} className="postCard">
              <CardBody>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Avatar name={post.author.username} size={'sm'} />
                    <CardHeader padding={0}>
                      <Heading>{post.title}</Heading>
                    </CardHeader>
                    <Text>{post.summary}</Text>
                    <ChakraLink to={`/posts/${post.id}`} as={ReactRouterLink}>
                      View
                    </ChakraLink>
                  </Box>
                  <Image w={400} src={images[index]}></Image>
                </Box>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>No posts available</p>
        )}
        <div>
          <Button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={page >= Math.ceil(totalPosts / postsPerPage)}
          >
            Next
          </Button>
        </div>
        <Text>
          Page {page} of {Math.ceil(totalPosts / postsPerPage)}.
        </Text>
      </Box>
    </>
  );
}
