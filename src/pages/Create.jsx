import axios from 'axios';
import { useState } from 'react';
import colors from '../ulils/ColorPallette';
import Header from '../components/Header';
import {
  Card,
  CardBody,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Box,
  Divider,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function Create() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState('');
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
      const response = await axios.post(
        'http://localhost:3000/api/posts',

        {
          title: title,
          content: content,
          summary: summary,
          userId: Number(userId),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        }
      );
      console.log(response);
      navigate('/posts');
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
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
                  <FormLabel color={textDefault}>Title</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <FormLabel color={textDefault}>Summary</FormLabel>
                  <Input
                    type="text"
                    value={summary}
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                  />
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
                    Submit Post
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
