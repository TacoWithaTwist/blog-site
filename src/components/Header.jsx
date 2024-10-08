import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Icon } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
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
          <Link to="/">
            <Icon as={FaHome} w={10} h={8}></Icon>
            <Button size="sm" colorScheme="teal">
              Home
            </Button>
          </Link>
        </div>
        <ButtonGroup spacing={3} className="headerRight">
          <Link to="/login">
            <Button size="sm" colorScheme={'teal'}>
              Login
            </Button>
          </Link>

          <Link to="/signup">
            <Button size="sm" colorScheme="teal">
              Register
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Link to="/">
          <Icon as={FaHome} w={10} h={8}></Icon>
          <Button size="sm" colorScheme="teal">
            Home
          </Button>
        </Link>
      </div>
      <ButtonGroup spacing={3} className="headerRight">
        <Link to="/posts">
          <Button size="sm" colorScheme={'teal'}>
            Browse
          </Button>
        </Link>

        <Link onClick={handleLogout}>
          <Button size="sm" colorScheme="teal">
            Logout
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
