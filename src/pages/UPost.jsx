import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import AddComment from './AddComment';
import Comments from './Comments';
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Heading,
  Text,
} from '@chakra-ui/react';
export default function UPost() {
  const { postid } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUniquePost = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(
          `http://localhost:3000/api/posts/${postid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUniquePost();
  }, [postid]);
  return (
    <>
      <Header />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {isLoading && <Text>Loading post...</Text>}
      {post && (
        <Card>
          <CardHeader>
            <Avatar name={post.author.username} />
          </CardHeader>
          <CardHeader>
            <Heading>{post.title}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{post.content}</Text>
          </CardBody>
          <Comments />
          <AddComment postid={post.id} />
        </Card>
      )}

      {!post && !isLoading && !error && <Text>No post found.</Text>}
    </>
  );
}
