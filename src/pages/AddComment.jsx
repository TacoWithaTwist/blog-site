import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import colors from '../ulils/ColorPallette';
import {
  Card,
  CardBody,
  FormLabel,
  FormControl,
  Button,
  Textarea,
  Box,
  Divider,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function AddComment() {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { postid } = useParams();
  const navigate = useNavigate();
  const r = colors.r;
  const bg = colors.bg;
  const textDefault = colors.textDefault;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const token = localStorage.getItem('jwtToken');
      const userId = localStorage.getItem('userId');
      console.log(userId);
      const response = await axios.post(
        `http://localhost:3000/api/posts/${postid}/comments`,
        {
          content: content,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        }
      );
      console.log(response);
      navigate(`/posts/${postid}`);
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        className="Create"
      >
        <Center height="50px">
          <Divider />
        </Center>

        <Box w={'100%'} h={'70%'}>
          <Card bg={bg}>
            <CardBody>
              <FormControl onSubmit={handleSubmit}>
                <form onSubmit={handleSubmit}>
                  <FormLabel color={textDefault}>Content</FormLabel>
                  <Textarea
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                  <Button
                    size="sm"
                    bg={r}
                    color="white"
                    _hover={{ bg: '#9D44B5' }}
                    isLoading={isLoading}
                    type="submit"
                  >
                    {' '}
                    Submit Comment
                  </Button>
                </form>
              </FormControl>
            </CardBody>
          </Card>
        </Box>
        {error && <p>Error with submitting your post, sorry!</p>}
      </Box>
    </>
  );
}
