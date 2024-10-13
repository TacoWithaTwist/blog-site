import { useNavigate } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/new-logo-logo-zip-file/svg/logo-color.svg';
import '../cssModules/Header.css';
export default function Header() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    navigate('/login');
  };
  if (!userId) {
    return (
      <div className="headerContainer">
        <div className="headerLeft">
          <Image src={logo} w={10} h={8} className="logo" />
          <ChakraLink as={ReactRouterLink} to="/" bg="#22222" color="#F15152">
            Home
          </ChakraLink>
        </div>
        <div className="headerRight">
          <ChakraLink
            size="sm"
            bg="#F15152"
            color="white"
            _hover={{ bg: '#AC3333' }}
            as={ReactRouterLink}
            to={'/login'}
          >
            {' '}
            Login
          </ChakraLink>

          <ChakraLink
            size="sm"
            bg="#22222"
            color="#F15152"
            as={ReactRouterLink}
            to={'/signup'}
          >
            {' '}
            Register
          </ChakraLink>
        </div>
      </div>
    );
  }
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Image src={logo} w={10} h={8} className="logo" />
        <ChakraLink as={ReactRouterLink} to="/" bg="#22222" color="#F15152">
          Home
        </ChakraLink>
      </div>
      <div className="headerRight">
        <ChakraLink
          size="sm"
          bg="#22222"
          color="#F15152"
          _hover={{ bg: '#AC3333' }}
          as={ReactRouterLink}
          to="/posts"
        >
          {' '}
          Browse
        </ChakraLink>

        <ChakraLink
          size="sm"
          bg="#22222"
          color="#F15152"
          onClick={handleLogout}
        >
          {' '}
          Logout
        </ChakraLink>
      </div>
    </div>
  );
}
