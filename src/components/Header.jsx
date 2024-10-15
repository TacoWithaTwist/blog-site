import { useNavigate } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Image, Box, Button } from '@chakra-ui/react';
import logo from '../assets/png/logo-no-background.png';
import colors from './ColorPallette';
import '../cssModules/Header.css';
export default function Header() {
  const navigate = useNavigate();
  const bg = colors.bg;
  const textDefault = colors.textDefault;
  const textHover = colors.textHover;
  const ctaColor = colors.p;
  const userId = localStorage.getItem('userId');
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    navigate('/login');
  };
  if (!userId) {
    return (
      <Box className="headerContainer" bg={bg}>
        <Image h={8} className="logo" src={logo} />

        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'6em'}
          className="headerRight"
        >
          <ChakraLink
            className="link"
            as={ReactRouterLink}
            to="/"
            color={textDefault}
            _hover={{ color: textHover }}
          >
            Home
          </ChakraLink>

          <ChakraLink
            size="sm"
            textDecoration={'none'}
            color={textDefault}
            as={ReactRouterLink}
            _hover={{ color: textHover }}
            to={'/signup'}
          >
            Register
          </ChakraLink>
          <ChakraLink
            size="sm"
            color={textDefault}
            as={ReactRouterLink}
            to={'/login'}
            _hover={{ color: textHover }}
          >
            Login
          </ChakraLink>
          <Button color={bg} bg={ctaColor}>
            Subscribe
          </Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box className="headerContainer" bg={bg}>
      <Image w={10} h={8} className="logo" src={logo} />
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'6em'}
        className="headerRight"
      >
        <ChakraLink
          className="link"
          as={ReactRouterLink}
          to="/"
          color={textDefault}
          _hover={{ color: textHover }}
        >
          Home
        </ChakraLink>
        <ChakraLink
          className="link"
          as={ReactRouterLink}
          to="/posts"
          color={textDefault}
          _hover={{ color: textHover }}
        >
          Browse
        </ChakraLink>

        <ChakraLink
          className="link"
          as={ReactRouterLink}
          to="/"
          color={textDefault}
          _hover={{ color: textHover }}
          onClick={handleLogout}
        >
          Logout
        </ChakraLink>
        <Button color={bg} bg={ctaColor}>
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}
