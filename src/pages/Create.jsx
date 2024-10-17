import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import colors from '../ulils/ColorPallette';
import {
  Card,
  CardBody,
  FormLabel,
  FormControl,
  Input,
  Button,
  Collapse,
  Textarea,
  Box,
  Divider,
  Center,
} from '@chakra-ui/react';
export default function Create() {
  const { isOpen, onToggle } = useDisclosure();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const r = colors.r;

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
          userId: Number(userId),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        }
      );
      console.log(response);
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      className="Create"
    >
      <Button
        size="sm"
        bg={r}
        color="white"
        _hover={{ bg: '#9D44B5' }}
        onClick={onToggle}
      >
        {' '}
        Create a post now!
      </Button>
      <Center height="50px">
        <Divider />
      </Center>
      <Collapse in={isOpen} animateOpacity>
        <Box w={'100%'}>
          <Card bg={'#222222'}>
            <CardBody>
              <FormControl onSubmit={handleSubmit}>
                <form onSubmit={handleSubmit}>
                  <FormLabel color={'white'}>Title</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <FormLabel color={'white'}>Content</FormLabel>
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
      </Collapse>
      {error && <p>Error with submitting your post, sorry!</p>}
    </Box>
  );
}
