import { useState } from 'react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import colors from '../components/ColorPallette';
import axios from 'axios';
import '../cssModules/Login.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const secondary = colors.secondary;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('userId');
      localStorage.removeItem('jwtToken');
      setIsLoading(true);
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      const userId = response.data.userId;
      localStorage.setItem('userId', userId);
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
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <FormControl as="fieldset" className="inputsContainer">
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
                bg={secondary}
                color={'white'}
                _hover={{ bg: '#9D44B5' }}
                isLoading={isLoading}
                type="submit"
              >
                Login
              </Button>{' '}
            </div>
          </FormControl>
          {error && <FormErrorMessage>{error}</FormErrorMessage>}{' '}
        </form>
      </div>
    </>
  );
}
