import { useNavigate } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Image, Box } from '@chakra-ui/react';
import colors from './ColorPallette';
import '../cssModules/Header.css';
export default function Header() {
  const navigate = useNavigate();
  const primary = colors.primary;
  const secondary = colors.secondary;
  const userId = localStorage.getItem('userId');
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    navigate('/login');
  };
  if (!userId) {
    return (
      <Box className="headerContainer">
        <Box className="headerLeft">
          <Image w={10} h={8} className="logo" />
          <ChakraLink
            className="link"
            as={ReactRouterLink}
            to="/"
            bg="#22222"
            color={primary}
            padding={'6px'}
            border={('solid', '2px')}
            textDecoration={'none'}
            borderRadius={'5px'}
          >
            Home
          </ChakraLink>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'10px'}
          className="headerRight"
        >
          <ChakraLink
            size="sm"
            bg={secondary}
            color="white"
            _hover={{ bg: '#9D44B5' }}
            as={ReactRouterLink}
            to={'/login'}
            className="login "
            display="flex"
            alignItems="center"
            justifyContent="center"
            textDecoration={'none'}
            padding={'6px'}
            borderRadius={'5px'}
          >
            {' '}
            Login
          </ChakraLink>

          <ChakraLink
            size="sm"
            bg="#22222"
            textDecoration={'none'}
            color={primary}
            as={ReactRouterLink}
            to={'/signup'}
            className="link"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding={('4px', '6px', '4px', '4px')}
            border={('solid', '2px')}
            borderRadius={'5px'}
          >
            {' '}
            Register
          </ChakraLink>
        </Box>
      </Box>
    );
  }
  return (
    <Box className="headerContainer">
      <Box className="headerLeft">
        <Image w={10} h={8} className="logo" />
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          bg="#22222"
          color={primary}
          className="link"
          textDecoration={'none'}
          padding={'6px'}
          border={('solid', '2px')}
          borderRadius={'5px'}
        >
          Home
        </ChakraLink>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'10px'}
        className="headerRight"
      >
        <ChakraLink
          size="sm"
          bg={secondary}
          color="white"
          fontWeight={'bold'}
          _hover={{ bg: '#9D44B5' }}
          textDecoration={'none'}
          as={ReactRouterLink}
          to="/posts"
          className="link"
          padding={'6px'}
          borderRadius={'5px'}
        >
          Browse
        </ChakraLink>

        <ChakraLink
          size="sm"
          bg="#22222"
          color={primary}
          onClick={handleLogout}
          textDecoration={'none'}
          className="link"
          padding={'4px'}
          borderRadius={'5px'}
          border={('solid', '2px')}
        >
          Logout
        </ChakraLink>
      </Box>
    </Box>
  );
}
