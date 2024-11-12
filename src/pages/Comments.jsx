import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, Text, CardBody, CardHeader } from '@chakra-ui/react';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { postid } = useParams();
  console.log(postid);
  useEffect(() => {
    const getComments = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts/${postid}/comments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setComments(response.data);
      } catch (e) {
        console.error(e);
        setError(e);
      }
    };
    getComments();
  }, [postid]);
  console.log(comments);
  return (
    <>
      <Box>
        {comments ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardBody>
                <CardHeader>{comment.author.username}</CardHeader>
                <Text>{comment.content}</Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <Text>{error}</Text>
        )}
      </Box>
    </>
  );
}
