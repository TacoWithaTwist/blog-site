import Header from '../components/Header';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../ulils/ColorPallette';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const r = colors.r;
  const v = colors.v;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:3000/api/signup', {
        username,
        email,
        password,
      });

      console.log('Signup response:', response); // Log the response for debugging
      navigate('/login'); // Redirect to home page
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
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <FormControl as="fieldset" className="inputsContainer">
            <div className="inputs">
              <FormLabel htmlFor="">Username :</FormLabel>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="inputs">
              <FormLabel htmlFor="">Email :</FormLabel>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="inputs">
              <FormLabel htmlFor="">Password :</FormLabel>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="inputs">
              <Button
                size="sm"
                bg={r}
                color="white"
                _hover={{ bg: v }}
                isLoading={isLoading}
                type="submit"
              >
                Register
              </Button>{' '}
            </div>
          </FormControl>
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </form>
      </div>
    </>
  );
}
